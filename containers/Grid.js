import React, { PropTypes } from 'react'
import R from 'ramda';

import Cell from '../components/cell';

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

    makeRow(rowIndex, dim) {
        let cells = [];
        for (let i = 1; i <= dim; i++) {
            let coordinates = [ rowIndex, i ];
            let isActive = R.contains(coordinates, this.state.active);

            cells.push(
                <Cell 
                    key={ coordinates.toString() } 
                    onClick={ this.makeActive.bind( this, coordinates) }
                    isActive={ isActive }
                    gridDim={ dim }
                    cellMarg={ this.state.cellMarg }
                />
            )
        }

        return ( 
            <div
                key={ "row: " + rowIndex }
                style={ this.style().row } 
            >
                { cells }
            </div>
        )
    }, 

    render() {
        let gridDim = this.state.gridDim;
        let grid = [];
        for (let i = 1; i <= gridDim; i++) {
            grid.push(
                this.makeRow( i, gridDim )
            )
        } 

        return (
            <div>
                { grid }
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
