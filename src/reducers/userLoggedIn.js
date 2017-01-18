export const userLoggedIn = (state = false, action) => {
  switch (action.type) {
    case 'SET_USER_LOGGED_IN':
      return action.value
    default:
      return state
  }
}
