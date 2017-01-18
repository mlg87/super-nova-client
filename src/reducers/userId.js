export const userId = (state = null, action) => {
  switch (action.type) {
    case 'SET_USER_ID':
      return action.value
    case 'UNSET_USER_ID':
      return null
    default:
      return state
  }
}
