export const toggleCell = (id, color) => {
  return {
    type: 'TOGGLE_CELL',
    id,
    activeColor: color,
  }
}

export const drawCell = (id, color) => {
  return {
    type: 'DRAW_CELL',
    id,
    activeColor: color,
  }
}

export const refreshCells = () => {   
    return { 
        type: 'REFRESH_CELLS' 
    }
}

export const changeColor = (color) => {
    return {
        type: 'CHANGE_COLOR',
        color
    }
}

