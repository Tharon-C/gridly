import { connect } from 'react-redux'
import { drawCell, refreshCells } from '../actions'
import EditorUi from '../components/EditorUi'

const mapStateToProps = (state) => {
  return {
    cells: state.cells,
    ...state.color
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
      onRefresh: () => dispatch(refreshCells()),
      onDrawCell: (cells) => {
          cells.map( cell => {
              dispatch(drawCell(cell.id, cell.activeColor))
          })
    }
  }
}

const Editor = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditorUi)

export default Editor
