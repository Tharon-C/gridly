import { combineReducers } from 'redux'
import cells from './cells'
import color from './color'

const todoApp = combineReducers({
    cells,
    color
})

export default todoApp
