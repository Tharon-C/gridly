import React, { PropTypes } from 'react';
import R from 'ramda';
import Cell from '../components/Cell';

const CellRow = ({ 
        onClick, active, gridDim, cellMarg, row 
    }) => {
    
    let style = {    
        display: "flex",
        width: "100%",
        margin: `${ cellMarg }% 0px`
    }

    return   (
        <div 
            style={ style }
        >
            {
                row.map((cell, i) => {
                    let isActive = R.contains(
                        cell, active);

                    return ( 
                        <Cell 
                            key={ cell.toString() } 
                            onClick={ onClick
                                    .bind(this, cell) }
                            isActive={ isActive }
                            gridDim={ gridDim }
                            cellMarg={ cellMarg }
                        />
                    )
                }) 
            }
        </div>
    )
}

Cell.propTypes = {
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  gridDim: PropTypes.number.isRequired
}

export default CellRow;
