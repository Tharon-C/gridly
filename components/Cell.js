import React, { PropTypes } from 'react';

const Cell = ({ onClick, isActive, gridDim, cellMarg }) => {
    let cellDim = 100 / gridDim;
    let background;

    if (isActive) {
        background = "palegreen";
    } else { background = "whitesmoke" };
    
    let style = {    
        cursor: "pointer",
        boxSizing: "border-box",
        background,
        width: cellDim - cellMarg + "%",
        paddingBottom: cellDim - cellMarg + "%",
        margin: `0px ${ cellMarg }%`
    }

    return   (
        <div
            onClick={onClick}
            style={style}
        />
    )
}

Cell.propTypes = {
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  gridDim: PropTypes.number.isRequired
}

export default Cell;
