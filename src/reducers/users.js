export const userApiFetch = (state = false, action) => {
  switch (action.type) {
    case 'USER_REGISTER_FETCH':
    case 'USER_LOGIN_FETCH':
    case 'USERS_GET_FETCH':
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

export const usersApiSuccess = (state = [], action) => {
  switch (action.type) {
    case 'USERS_GET_SUCCESS':
      return action.payload
    default:
      return state
  }
}

export const usersApiError = (state = {}, action) => {
  switch (action.type) {
    case 'USERS_GET_ERROR':
      return action.err
    default:
      return state
  }
}

export const usersSelected = (state = [], action) => {
  const { type, indexes } = action

  switch (type) {
    case 'USERS_UPDATE_SELECTED':
      return indexes
    default:
      return state
  }
}

// NOTE: this was working, nothing changed, now its not coming through as a single
// index. solution above is the work around for the time being
// pushes/pulls user from an arr based on their index in the Table
// this works because the index in the table is the same as the index
// for the usersApiSuccess arr
// export const usersSelected = (state = [], action) => {
//   const { type, index } = action
//
//   switch (type) {
//     case 'USERS_UPDATE_SELECTED':
//       const i = state.indexOf(index)
//       if (i === -1 && typeof index !== 'undefined') {
//         return [
//           ...state,
//           index
//         ]
//       } else if (i !== 1 && typeof index !== 'undefined') {
//         return [
//           ...state.slice(0, i),
//           ...state.slice(i + 1)
//         ]
//       } else {
//         return state
//       }
//     case 'USERS_PULL_FROM_EDIT_ARR':
//     // get this to work
//       return state
//     default:
//       return state
//   }
// }

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
