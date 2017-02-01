import * as ActionTypes from 'actions/users'

const initialState = {
  users: [],
  usersSelected: [],
  isFetching: false
}

// TODO:
// 1) make sure login works DONE
// 2) make sure logout works DONE
// 3) set up err message system
export const users = ( state = initialState, action) => {
  const { type } = action

  switch (type) {
    case ActionTypes.USERS_GET_REQUEST:
    case ActionTypes.USER_REGISTER_REQUEST:
    case ActionTypes.USER_LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true
      }

    case ActionTypes.USERS_GET_SUCCESS:
      return {
        ...state,
        users: action.response.data,
        isFetching: false
      }

    case ActionTypes.USER_REGISTER_SUCCESS:
      return {
        ...state,
        isFetching: false
      }

    // probably want to handle the failure differently
    case ActionTypes.USERS_GET_FAILURE:
    case ActionTypes.USER_REGISTER_FAILURE:
      console.log('FAILURE ACTION', action);
      return state

    case ActionTypes.USERS_UPDATE_SELECTED:
      const { indexes } = action
      if (!(indexes instanceof Array)) {
        throw new Error('Indexes must be an array')
      }
      return {
        ...state,
        usersSelected: indexes
      }

    // pull deleted removes users from the users GET arr so we dont
    // have to make another trip to the server to get an updated list
    case ActionTypes.USERS_PULL_DELETED:
      const { id } = action
      if (typeof id !== 'number') {
        throw new Error(`ID must be a number: ${id}`)
      }
      // is this the code i would exhibit in an interview? absolutely not.
      // does it get the job done? yep
      const { users } = state
      const userIndex = users.filter((user, i) => {
        if (user.id === id) {
          return i
        }
        return false
      })
      const i = users.indexOf(userIndex[0])
      return {
        ...state,
        users: [
          ...users.slice(0, i),
          ...users.slice(i + 1)
        ]
      }
    default:
      return state
  }
}

// export const userApiFetch = (state = false, action) => {
//   const { type, isFetching } = action
//
//   switch (type) {
//     case ActionTypes.USER_REGISTER_FETCH:
//     case ActionTypes.USER_LOGIN_FETCH:
//     // case ActionTypes.USERS_GET_REQUEST:
//       if (typeof isFetching !== 'boolean') {
//         throw new Error('isFetching must be a boolean')
//       }
//       return isFetching
//     default:
//       return state
//   }
// }

export const userApiRes = (state = {}, action) => {
  const { type, payload } = action

  switch (type) {
    // might want to make this more useful
    // case ActionTypes.USER_REGISTER_SUCCESS:
    // case ActionTypes.USER_LOGIN_SUCCESS:
    //   return state
    // case ActionTypes.USER_REGISTER_ERROR:
    // case ActionTypes.USER_LOGIN_ERROR:
    //   if (!(payload instanceof Error)) {
    //     throw new Error(`invalid payload ${payload}`)
    //   }
    //   return payload
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
    // case ActionTypes.USERS_GET_SUCCESS:
    //   if (!(payload instanceof Array)) {
    //     throw new Error('invalid payload')
    //   }
    //   return payload
    // case ActionTypes.USERS_GET_ERROR:
    //   if (typeof payload !== 'object') {
    //     throw new Error('invalid payload')
    //   }
    //   return payload
    // case ActionTypes.USERS_PULL_DELETED:
    //   if (typeof payload !== 'number') {
    //     throw new Error(`invalid payload ${payload}`)
    //   }
    //   // is this the code i would exhibit in an interview? absolutely not.
    //   // does it get the job done? yep
    //   const userIndex = state.filter((user, i) => {
    //     if (user.id === payload) {
    //       return i
    //     }
    //     return false
    //   })
    //   const i = state.indexOf(userIndex[0])
    //   return [
    //     ...state.slice(0, i),
    //     ...state.slice(i + 1)
    //   ]
    default:
      return state
  }
}

// export const usersSelected = (state = [], action) => {
//   const { type, indexes } = action
//
//   switch (type) {
//     case ActionTypes.USERS_UPDATE_SELECTED:
//       if (!(indexes instanceof Array)) {
//         throw new Error('indexes must be an array')
//       }
//       return indexes
//     default:
//       return state
//   }
// }

// export const userLogout = (state = null, action) => {
//   const { type, id } = action
//
//   if (type === ActionTypes.USER_LOGOUT) {
//     return id
//   }
//
//   return state
// }

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
