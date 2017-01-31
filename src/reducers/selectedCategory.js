export const selectedCategory = (state = '', action) => {
  if (action.type === 'SET_SELECTED_CATEGORY') {
    return action.payload
  }
  return state
}
