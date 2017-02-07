import * as ActionTypes from 'actions/customers'

// exported for testing
export const initialState = {
  customers: [],
  isFetching: false,
  error: null
}

export const customersReducer = ( state = initialState, aciton ) => {
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

    default:
      return state
  }
}
