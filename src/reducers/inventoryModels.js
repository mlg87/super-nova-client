export const inventoryModels = (state = [], action) => {
  switch (action.type) {
    case ('SET_MODELS'):
    console.log('in models reducer', action.payload);
      return action.payload
    default:
      return state
  }
}
