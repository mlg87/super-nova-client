export const isLoading = (state = true, action) => {
  switch (action.type) {
    case 'SET_LOADING_STATE':
      return action.value
    default:
      return state
  }
}
