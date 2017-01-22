export const userApiFetch = (state = false, action) => {
  switch (action.type) {
    case 'USER_REGISTER_FETCH':
    case 'USER_LOGIN_FETCH':
      return action.isFetching
    default:
      return state
  }
}

export const userApiSuccess = (state = {}, action) => {
  switch (action.type) {
    // we should make these more useful
    case 'USER_REGISTER_SUCCESS':
    case 'USER_LOGIN_SUCCESS':
      return state
    default:
      return state
  }
}

export const userApiError = (state = {}, action) => {
  switch (action.type) {
    case 'USER_REGISTER_ERROR':
    case 'USER_LOGIN_ERROR':
      return action.err
    default:
      return state
  }
}

// OLD WAY - MAY GO BACK TO THIS
// const users = (state = {}, action) => {
//   switch (action.type) {
//     case 'USER_REGISTER':
//     case 'USER_LOGIN':
//       return {
//         // perhaps use Object.assign here?
//         ...state,
//         username: action.username,
//         password: action.password
//       }
//     case 'USER_LOGOUT':
//       return {
//         ...state,
//         username: action.username
//       }
//     case 'USER_REGISTER_SUCCESS':
//       return {
//         ...state,
//         token: action.token
//       }
//     case 'USER_REGISTER_ERROR':
//       return {
//         ...state,
//         err: action.err
//       }
//     default:
//       return state
//   }
// }
//
// export default users
