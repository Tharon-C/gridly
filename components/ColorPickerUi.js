import React from 'react'
import { SketchPicker } from 'react-color'

const ColorPickerUi = React.createClass({
    getInitialState() {
	return {
	    displayColorPicker: false,
	}
    },

    style() {
	return {
            wrapper: {
              position: 'relative',
            },
	    color: {
              display: "inline-block",
	      width: '15px',
	      height: '15px',
              borderRadius: '2px',
	      background: this.props.color,
	    },
	    swatch: {
	      padding: '5px',
	      background: '#fff',
	      borderRadius: '1px',
	      boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
	      display: 'inline-block',
	      cursor: 'pointer',
	    },
	    popover: {
              position: 'absolute',
              right: '0px',
	      zIndex: '2',
	    },
	    cover: {
	      position: 'fixed',
	      top: '0',
	      right: '0',
	      bottom: '0',
	      left: '0',
	    },
	}
    },

    handleClick() {
	this.setState({ displayColorPicker: !this.state.displayColorPicker })
    },

    handleClose() {
	this.setState({ displayColorPicker: false })
    },

    handleChange(color) {
        console.log(color, "sourceClick");
	this.props.onColorChange(color.hex)
    },

    render() {
        console.log(this.props.color, "render");
	return (
	    <div style={ this.style().wrapper }>
		<div style={ this.style().swatch } onClick={ this.handleClick }>
		    Select a Color! <span style={ this.style().color } />
		</div>

		{ this.state.displayColorPicker ? <div style={ this.style().popover }>
            
		<div style={ this.style().cover } onClick={ this.handleClose }/>
		    <SketchPicker color={ this.props.color } onChange={ this.handleChange } />
		</div> : null }

	    </div>
	)
    },
});

export default ColorPickerUi
