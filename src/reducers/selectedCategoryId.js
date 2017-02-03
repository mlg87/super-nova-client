export const selectedCategoryId = (state = 0, action) => {
  if (action.type === 'SET_SELECTED_CATEGORY_ID') {
    return action.payload
  }
  return state
}
