export const userApiFetch = (state = false, action) => {
  const { type, isFetching } = action

  switch (type) {
    case 'USER_REGISTER_FETCH':
    case 'USER_LOGIN_FETCH':
    case 'USERS_GET_FETCH':
      if (typeof isFetching !== 'boolean') {
        throw new Error('isFetching must be a boolean')
      }
      return isFetching
    default:
      return state
  }
}

export const userApiRes = (state = {}, action) => {
  const { type, payload } = action

  switch (type) {
    case 'USER_REGISTER_SUCCESS':
    case 'USER_LOGIN_SUCCESS':
      if (typeof payload !== 'string') {
        throw new Error('invalid payload')
      }
      return payload
    case 'USER_REGISTER_ERROR':
    case 'USER_LOGIN_ERROR':
      if (!(payload instanceof Error) && payload !== null) {
        throw new Error(`invalid payload ${payload}`)
      }
      return payload
    default:
      return state
  }
}

// set to an empty arr so that users view can load without mapping over null
export const usersApiRes = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
    case 'USERS_GET_SUCCESS':
      if (!(payload instanceof Array)) {
        throw new Error('invalid payload')
      }
      return payload
    case 'USERS_GET_ERROR':
      if (typeof payload !== 'object') {
        throw new Error('invalid payload')
      }
      return payload
    default:
      return state
  }
}

export const usersSelected = (state = [], action) => {
  const { type, indexes } = action

  switch (type) {
    case 'USERS_UPDATE_SELECTED':
      if (!(indexes instanceof Array)) {
        throw new Error('indexes must be an array')
      }
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
