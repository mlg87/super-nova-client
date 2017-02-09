import * as ActionTypes from 'actions/inventory'

export const initialState = {
  isFetching: false,
  error: null,
  inventory: [],
  models: [],
  sizes: [],
  categories: [],
  itemTypes: [],
  itemTypeId: ''
}

export const inventoryReducers = ( state = initialState, action ) => {
  const { type } = action

  switch (type) {
    case ActionTypes.MODELS_GET_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case ActionTypes.MODELS_GET_SUCCESS:
      if (!(action.response.data instanceof Array)) {
        throw new Error('Models must be an array')
      }
      return {
        ...state,
        models: action.response.data,
        isFetching: false
      }
    case ActionTypes.MODELS_GET_FAILURE:
      return {
        ...state,
        error: action.error
      }
    default:
     return state
  }

}


//
// export const inventory = (state = [], action) => {
//   if (action.type === 'SET_INVENTORY') {
//     return action.payload
//   }
//   return state
// }
