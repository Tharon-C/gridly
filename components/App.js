import React from 'react'
import normalizeCSS from 'normalize.css';
import baseStyle from '../base.css';
import AppBar from './AppBar';
import Editor from '../containers/Editor';
import Grid from '../containers/Grid';

const App = () => (
    <div>
        <AppBar/>
        <div 
            style={{ 
                display: "flex", 
                position: "fixed", 
                width: "100%", 
                top: "40px", 
                bottom: "0" 
            }}
        >
	    <Editor/>
            <div style={{
                    padding: "50px 10px 0px",
                    width: "100%",
                }}
            >
                <div style={{ 
                        maxWidth: "500px", 
                        margin: "auto" 
                    }}
                >
                    <Grid/>
                </div>
            </div>
        </div>
  </div>
)
export default App
