import * as ActionTypes from 'actions/inventory'

export const initialState = {
  isFetching: false,
  error: null,
  inventory: [],
  models: [],
  sizes: [],
  categories: [],
  itemTypes: [],
  selectedInventoryId: null,
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
    case ActionTypes.SIZES_GET_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case ActionTypes.SIZES_GET_SUCCESS:
      if (!(action.response.data instanceof Array)) {
        throw new Error('Sizes must be an array')
      }
      return {
        ...state,
        sizes: action.response.data,
        isFetching: false
      }
    case ActionTypes.SIZES_GET_FAILURE:
      return {
        ...state,
        error: action.error
      }
    case ActionTypes.CATEGORIES_GET_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case ActionTypes.CATEGORIES_GET_SUCCESS:
      if (!(action.response.data instanceof Array)) {
        throw new Error('Models must be an array')
      }
      return {
        ...state,
        categories: action.response.data,
        isFetching: false
      }
    case ActionTypes.CATEGORIES_GET_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false
      }
    case ActionTypes.ITEM_TYPES_GET_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case ActionTypes.ITEM_TYPES_GET_SUCCESS:
      if (!(action.response.data instanceof Array)) {
        throw new Error('Item Types must be an array')
      }
      return {
        ...state,
        itemTypes: action.response.data,
        isFetching: false
      }
    case ActionTypes.ITEM_TYPES_GET_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false
      }
    case ActionTypes.INVENTORY_GET_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case ActionTypes.INVENTORY_GET_SUCCESS:
      if (!(action.response.data instanceof Array)) {
        throw new Error('Item Types must be an array')
      }
      return {
        ...state,
        inventory: action.response.data,
        isFetching: false
      }
    case ActionTypes.INVENTORY_GET_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false
      }
    case ActionTypes.INVENTORY_POST_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case ActionTypes.INVENTORY_POST_SUCCESS:
      return {
        ...state,
        isFetching: false
      }
    case ActionTypes.INVENTORY_POST_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false
      }
    case ActionTypes.RESET_INVENTORY_ERROR:
      return {
        ...state,
        error: null
      }
    case ActionTypes.UPDATE_SELECTED_INVENTORY:
      return {
        ...state,
        selectedInventoryId: action.id
      }
    default:
     return state
  }

}
