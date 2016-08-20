import { connect } from 'react-redux'
import { changeColor } from '../actions'
import ColorPickerUi from '../components/ColorPickerUi'

const mapStateToProps = (state) => {
  return {
    ...state.color,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onColorChange: (color) => {
        console.log(color, "cont");
      dispatch(changeColor(color))
    }
  }
}

const ColorPicker = connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorPickerUi)

export default ColorPicker
