export const inventorySizes = (state = [], action) => {
  switch (action.type) {
    case ('SET_SIZES'):
      return action.payload
    default:
      return state
  }
}
