export const userRegisterFetch = (state = false, action) => {
  switch (action.type) {
    case 'USER_REGISTER_FETCH':
      return action.isFetching
    default:
      return state
  }
}

export const userRegisterSuccess = (state = {}, action) => {
  switch (action.type) {
    case 'USER_REGISTER_SUCCESS':
      return action.token
    default:
      return state
  }
}

export const userRegisterError = (state = {}, action) => {
  switch (action.type) {
    case 'USER_REGISTER_ERROR':
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
