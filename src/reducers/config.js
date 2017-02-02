import { includes } from 'lodash'
import { usersConfigTypes as UserTypes } from 'actions/users'
import { RESET_CONFIG_STATE, RESET_CONFIG_ERROR } from 'actions'

export const initialState = {
  error: null,
  userLogout: null
}

export const configReducer = ( state = initialState, action ) => {
  const { type } = action

  // for your fetch err types, just add an ||
  if (includes(UserTypes.errorTypes, type)) {
    let { error } = action
    return {
      ...state,
      error
    }
  }

  switch (type) {
    case UserTypes.miscTypes.USER_LOGOUT:
      let { id } = action
      if (typeof id !== 'number') {
        throw new Error('ID must be a number')
      }
      return {
        ...state,
        userLogout: id
      }

    case RESET_CONFIG_STATE:
      return {
        ...initialState
      }

    case RESET_CONFIG_ERROR:
      return {
        ...state,
        error: null
      }

    default:
      return state
  }
}
