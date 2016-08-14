import React, { PropTypes } from 'react'
import R from 'ramda';
import { makeGrid } from '../utils/';

import Cell from '../components/Cell';
import CellRow from '../components/CellRow';

const Grid = React.createClass({

    getInitialState() {
        return {
            active: [],
            gridDim: 16,
            cellMarg: .2,
        }
    },

    makeActive(e) {
        let active = this.state.active;
        if (R.contains(e, active)) {
            let isEqual = n => R.equals(n, e);
            active = R.reject(isEqual, active);
        } else { active.push(e); }

        this.setState({
            active
        })
    },

    render() {
        let gridDim = this.state.gridDim;
        let grid = makeGrid(gridDim, gridDim);

        return (
            <div>
                { 
                    grid.map( ( row, i ) => {
                        return (
                            <CellRow
                                key={ row.toString() }
                                row={ row }
                                onClick={ this.makeActive }
                                gridDim={ this.state.gridDim }
                                cellMarg={ this.state.cellMarg }
                                active={ this.state.active }
                            />
                        )
                    }) 
                }
            </div>
        )
    },

    style(coordinates) {
        let cellMarg = this.state.cellMarg;
        return {
            row: {
                display: "flex",
                width: "100%",
                margin: `${ cellMarg }% 0px`

            },
        }
    }
});

Grid.propTypes = {
    className: PropTypes.string,
}

export default Grid
