import { connect } from 'react-redux'
import { toggleCell } from '../actions'
import CellList from '../components/CellList'

const mapStateToProps = (state) => {
  return {
    cells: state.cells,
    ...state.color
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCellClick: (id, color) => {
      dispatch(toggleCell(id, color))
    }
  }
}

const Grid = connect(
  mapStateToProps,
  mapDispatchToProps
)(CellList)

export default Grid
