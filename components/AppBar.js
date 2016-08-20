import React from 'react';
import ColorPicker from '../containers/ColorPicker';
import Wrapper from './layout/Wrapper';
import { ClearFix } from 'troposphere-ui/lib/utils';

const AppBar = () => {
    let style = {
        width: '100%',
        padding: '5px 20px',
        boxShadow: '1px 1px 3px rgba(0, 0, 0, .3)',
    }

    return (
        <nav style={ style }> 
                <ClearFix>
                    <div style={{ float: "right" }}>
                        <ColorPicker/>
                    </div>
                </ClearFix>
        </nav>
    )
};

export default AppBar
