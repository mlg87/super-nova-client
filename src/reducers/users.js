import * as ActionTypes from 'actions/users'

export const userApiFetch = (state = false, action) => {
  const { type, isFetching } = action

  switch (type) {
    case ActionTypes.USER_REGISTER_FETCH:
    case ActionTypes.USER_LOGIN_FETCH:
    case ActionTypes.USERS_GET_FETCH:
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
    // might want to make this more useful
    case ActionTypes.USER_REGISTER_SUCCESS:
    case ActionTypes.USER_LOGIN_SUCCESS:
      return state
    case ActionTypes.USER_REGISTER_ERROR:
    case ActionTypes.USER_LOGIN_ERROR:
      if (!(payload instanceof Error)) {
        throw new Error(`invalid payload ${payload}`)
      }
      return payload
    case ActionTypes.USERS_RESET_ERR:
      return null
    default:
      return state
  }
}

// set to an empty arr so that users view can load without mapping over null
export const usersApiRes = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
    case ActionTypes.USERS_GET_SUCCESS:
      if (!(payload instanceof Array)) {
        throw new Error('invalid payload')
      }
      return payload
    case ActionTypes.USERS_GET_ERROR:
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
    case ActionTypes.USERS_UPDATE_SELECTED:
      if (!(indexes instanceof Array)) {
        throw new Error('indexes must be an array')
      }
      return indexes
    default:
      return state
  }
}

export const userLogout = (state = null, action) => {
  const { type, id } = action

  if (type === ActionTypes.USER_LOGOUT) {
    return id
  }

  return state
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
//     case ActionTypes.USERS_UPDATE_SELECTED:
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
//     case ActionTypes.USERS_PULL_FROM_EDIT_ARR:
//     // get this to work
//       return state
//     default:
//       return state
//   }
// }

// OLD WAY - MAY GO BACK TO THIS
// const users = (state = {}, action) => {
//   switch (action.type) {
//     case ActionTypes.USER_REGISTER:
//     case ActionTypes.USER_LOGIN:
//       return {
//         // perhaps use Object.assign here?
//         ...state,
//         username: action.username,
//         password: action.password
//       }
//     case ActionTypes.USER_LOGOUT:
//       return {
//         ...state,
//         username: action.username
//       }
//     case ActionTypes.USER_REGISTER_SUCCESS:
//       return {
//         ...state,
//         token: action.token
//       }
//     case ActionTypes.USER_REGISTER_ERROR:
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
