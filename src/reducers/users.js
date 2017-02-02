import * as ActionTypes from 'actions/users'

// exported for testing
export const initialState = {
  users: [],
  usersSelected: [],
  isFetching: false,
  error: null
}

const usersReducer = ( state = initialState, action) => {
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
      if (!(action.response.data instanceof Array)) {
        throw new Error('Users must be an array')
      }
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

    // TODO: move all fetch failures to a config reducers and set the err
    // msg there
    case ActionTypes.USERS_GET_FAILURE:
    case ActionTypes.USER_REGISTER_FAILURE:
      const { error } = action
      return {
        ...state,
        isFetching: false,
        error
      }

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

    case ActionTypes.USERS_RESET_ERR:
      return {
        ...state,
        error: null
      }

    default:
      return state
  }
}

export default usersReducer
