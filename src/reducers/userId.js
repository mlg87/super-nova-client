export const userId = (state = null, action) => {
  switch (action.type) {
    case 'SET_USER_ID':
      if (typeof action.userId !== 'number') {
        throw new Error('invalid user ID')
      }
      return action.userId
    case 'UNSET_USER_ID':
      return null
    default:
      return state
  }
}
