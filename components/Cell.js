import React, { PropTypes } from 'react'

const Cell = ({ 
    onClick, active, activeColor, size 
}) => {
    let cellSize = 100 / size;
    let style = {    
        transition: "all ease .2s",
        cursor: "pointer",
        boxSizing: "border-box",
        background: active ? activeColor : 'whitesmoke' ,
        width: cellSize - .4 + "%",
        paddingBottom: cellSize - .4 + "%",
        margin: ".2%"
    }
    return (
        <div
            onClick={onClick}
            style={style}
        />
    )
}

Cell.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  activeColor: PropTypes.string.isRequired
}

export default Cell
