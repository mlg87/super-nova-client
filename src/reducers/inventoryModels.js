export const inventoryModels = (state = [], action) => {
  switch (action.type) {
    case ('SET_MODELS'):
      return action.payload
    default:
      return state
  }
}
