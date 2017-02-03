export const inventoryCategories = (state = [], action) => {
  if (action.type === 'SET_CATEGORIES') {
    return action.payload
  }
  return state
}
