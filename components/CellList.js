import React, { PropTypes } from 'react'
import Cell from './Cell'

const CellList = ({ cells, color, onCellClick }) => {

    let style = {    
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
    }
    return (
        <div style={ style }>
            {cells.map(cell =>
              <Cell
                key={cell.id}
                {...cell}
                onClick={() => onCellClick(cell.id, color )}
              />
            )}
        </div>
    )
}

CellList.propTypes = {
  cells: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    activeColor: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onCellClick: PropTypes.func.isRequired
}

export default CellList
