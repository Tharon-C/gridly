const color = (state = {color: "lightgreen"}, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return {
        ...action
      }
    default:
        return {
            ...state
        }
  }
}

export default color
