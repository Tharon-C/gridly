import React from 'react';

const Wrapper = React.createClass({
    render() {
        return (
            <div style={{ maxWidth: "1200px", margin: "auto" }}>
                { this.props.children }
            </div>
        )
    }
})

export default Wrapper 
