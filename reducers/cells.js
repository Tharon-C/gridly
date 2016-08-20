import { makeGrid2 } from '../utils';

const cell = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_CELL':
      if (state.id !== action.id) {
        return state
      }
      return {
        ...state,
        active: !state.active,
        activeColor: action.activeColor
      }
    case 'DRAW_CELL':
      if (state.id !== action.id) {
          return state
      }
      return {
        ...state,
        active: true,
        activeColor: action.activeColor
      }
    case 'REFRESH_CELLS':
        return {
            ...state,
            active: false
        }
    default:
        return state
  }
}

let cellTemp = (row, i) => { 
    return {
        id:`${row},${i}`, 
        activeColor: "palegreen", 
        active: false, 
        size: 8, 
        marg: .2 
    }};

const grid = makeGrid2(8, 8, cellTemp);

const cells = (state = grid, action) => {
  switch (action.type) {
    case 'TOGGLE_CELL':
      return state.map(t =>
        cell(t, action)
      )
    case 'DRAW_CELL':
      return state.map(t =>
        cell(t, action)
      )
    case 'REFRESH_CELLS':
        return state.map(t =>
            cell(t, action)
        )
    default:
      return state
  }
}

export default cells
