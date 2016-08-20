import React from 'react';
import { render } from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/monokai';

import { FlatButton } from 'troposphere-ui';
import { PlayIcon, ReplayIcon } from 'troposphere-ui/lib/icons';
import { ButtonGroup } from 'troposphere-ui/lib/utils';



const width = "500px";

const style = {
    wrapper: {
        overflowY: "scroll",
        fontSize: "14px",
        flex: "1 0 auto",
        position: "relative",
        width,
        background: "#272822",
    },
    editor: {
        position: "relative",
        top: "0",
        width,
    },
    runButton: {
        position: "fixed",
        zIndex: "9999",
        top: "3px",
        left: "20px"
    }
};


let code;

const EditorUi = React.createClass({

    onChange(newValue) {
        code = newValue;
    },

    onRun() {
        const draw = (cells) => {
            console.log(cells, code, "draw");
                this.props.onRefresh();
                this.props.onDrawCell(cells);
        }
        eval(code);
    },

    buildCode() {
        // Need a way to parse the string using regex 
        // to find the draw() function, inject the cell obj only,
        // and return the rest unafected

        let cells = this.props.cells.filter( cell => cell.active)
            .map( cell => {
                return `
    {
        id: "${cell.id}",
        activeColor: "${cell.activeColor}"
    }
                `
            });

        return `
draw([
    // The 'draw' function will 
    // pass this list to our grid
    // Make a drawing on the grid 
    // to see what the list looks like

    ${ cells }
]);
        `
    },

    render() {
        return (
            <div style={ style.wrapper }>
                <ButtonGroup
                    style={ style.runButton }
                >
                    <FlatButton
                        onTouch={ this.onRun }
                        icon={ <PlayIcon/> }
                    > 
                        Run Code 
                    </FlatButton>
                    <FlatButton
                        onTouch={ this.props.onRefresh }
                        icon={ <ReplayIcon/> }
                    > 
                        Refresh
                    </FlatButton>
                </ButtonGroup>
                    <AceEditor
                        mode="javascript"
                        theme="monokai"
                        name="code"
                        width="100%"
                        ref="ace"
                        fontSize={14}
                        maxLines={ Infinity }
                        value={ this.buildCode() }
                        editorProps={{$blockScrolling: Infinity}}
                        onChange={ this.onChange }
                        onLoad={(editor) => {
                            editor.focus();
                            editor.getSession().setUseWrapMode(true);
                            editor.getSession().setOptions({
                                scrollPastEnd: true
                            });
                        }}
                    />
            </div>
        )
    },
});

export default EditorUi
