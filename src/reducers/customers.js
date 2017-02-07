import * as ActionTypes from 'actions/customers'

// exported for testing
export const initialState = {
  customers: [],
  customersSelected: [],
  isFetching: false,
  error: null
}

export const customersReducer = ( state = initialState, action ) => {
  const { type } = action

  switch (type) {
    case ActionTypes.CUSTOMERS_GET_REQUEST:
      return {
        ...state,
        isFetching: true
      }

    case ActionTypes.CUSTOMERS_GET_SUCCESS:
      if (!(action.response.data instanceof Array)) {
        throw new Error('Customers must be an array')
      }
      return {
        ...state,
        customers: action.response.data,
        isFetching: false
      }

    case ActionTypes.CUSTOMERS_GET_FAILURE:
      const { error } = action
      return {
        ...state,
        isFetching: false,
        error
      }

    case ActionTypes.CUSTOMERS_UPDATE_SELECTED:
      const { indexes } = action
      if (!(indexes instanceof Array)) {
        throw new Error('Indexes must be an array')
      }
      return {
        ...state,
        customersSelected: indexes
      }

    // pull deleted removes customers from the customers arr so we dont
    // have to make another trip to the server to get an updated list
    case ActionTypes.CUSTOMERS_PULL_DELETED:
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
