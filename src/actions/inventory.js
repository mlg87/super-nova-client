import fetch from 'isomorphic-fetch'
import { push } from 'react-router-redux'
import { CALL_API } from 'middleware/api'
import { handleFetchErrors } from 'lib/helpers'


///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
// GET - categories

export const CATEGORIES_GET_REQUEST = 'CATEGORIES_GET_REQUEST'
export const CATEGORIES_GET_SUCCESS = 'CATEGORIES_GET_SUCCESS'
export const CATEGORIES_GET_FAILURE = 'CATEGORIES_GET_FAILURE'


const fetchCategoriesGet = () => ({
  [CALL_API]: {
    types: [CATEGORIES_GET_REQUEST, CATEGORIES_GET_SUCCESS, CATEGORIES_GET_FAILURE],
    endpoint: `categories`,
    method: 'get'
  }
})

export const categoriesGet = () => (dispatch, getState) => {
  dispatch(fetchCategoriesGet())
}

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
// GET - item_types with category id

export const ITEM_TYPES_GET_REQUEST = 'ITEM_TYPES_GET_REQUEST'
export const ITEM_TYPES_GET_SUCCESS = 'ITEM_TYPES_GET_SUCCESS'
export const ITEM_TYPES_GET_FAILURE = 'ITEM_TYPES_GET_FAILURE'

const fetchItemTypesGet = (categoryId) => ({
  [CALL_API]: {
    types: [ ITEM_TYPES_GET_REQUEST, ITEM_TYPES_GET_SUCCESS, ITEM_TYPES_GET_FAILURE],
    endpoint: `item_types/some?category_id=${categoryId}`,
    method: 'get'
  }
})

export const itemTypesGet = (categoryId) => (dispatch, getState) => {
  return dispatch(fetchItemTypesGet(categoryId))
}

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
// GET - models with item_type_id


export const MODELS_GET_REQUEST = 'MODELS_GET_REQUEST'
export const MODELS_GET_SUCCESS = 'MODELS_GET_SUCCESS'
export const MODELS_GET_FAILURE = 'MODELS_GET_FAILURE'

const fetchModelsGet = (itemTypeId) => ({
  [CALL_API]: {
    types: [ MODELS_GET_REQUEST, MODELS_GET_SUCCESS, MODELS_GET_FAILURE],
    endpoint: `models/some?item_type_id=${itemTypeId}`,
    method: 'get'
  }
})

export const modelsGet = (itemTypeId) => (dispatch, getState) => {
  return dispatch(fetchModelsGet(itemTypeId))
}

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
// GET - sizes with item_type_id

export const SIZES_GET_REQUEST = 'SIZES_GET_REQUEST'
export const SIZES_GET_SUCCESS = 'SIZES_GET_SUCCESS'
export const SIZES_GET_FAILURE = 'SIZES_GET_FAILURE'

const fetchSizesGet = (itemTypeId) => ({
  [CALL_API]: {
    types: [ SIZES_GET_REQUEST, SIZES_GET_SUCCESS, SIZES_GET_FAILURE],
    endpoint: `sizes/item_type/${itemTypeId}`,
    method: 'get'
  }
})

export const sizesGet = (itemTypeId) => (dispatch, getState) => {
  return dispatch(fetchSizesGet(itemTypeId))
}

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
// GET - inventory

export const INVENTORY_GET_REQUEST = 'INVENTORY_GET_REQUEST'
export const INVENTORY_GET_SUCCESS = 'INVENTORY_GET_SUCCESS'
export const INVENTORY_GET_FAILURE = 'INVENTORY_GET_FAILURE'

const fetchInventoryGet = (search_terms, category_id) => ({
  [CALL_API]: {
    types: [ INVENTORY_GET_REQUEST, INVENTORY_GET_SUCCESS, INVENTORY_GET_FAILURE],
    endpoint: `inventory/search`,
    method: 'get',
    headers: { search_terms, category_id }
  }
})

export const inventoryGet = (search_terms = ' ', category_id = 0) => (dispatch, getState) => {
  return dispatch(fetchInventoryGet(search_terms, category_id))
}

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
// POST - inventory

export const INVENTORY_POST_REQUEST = 'INVENTORY_POST_REQUEST'
export const INVENTORY_POST_SUCCESS = 'INVENTORY_POST_SUCCESS'
export const INVENTORY_POST_FAILURE = 'INVENTORY_POST_FAILURE'

const fetchInventoryPost = (inventory) => ({
  [CALL_API]: {
    types: [ INVENTORY_POST_REQUEST, INVENTORY_POST_SUCCESS, INVENTORY_POST_FAILURE],
    endpoint: `inventory`,
    method: 'post',
    body: JSON.stringify({inventory})
  }
})

export const inventoryPost = (inventory) => (dispatch, getState) => {
  return dispatch(fetchInventoryPost(inventory))
    .then(() => {
      dispatch(push('/inventory'))
    })
}

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
// snackbar - reset state inventory.error

export const RESET_INVENTORY_ERROR = 'RESET_INVENTORY_ERROR'

export const onRequestClose = () => (dispatch, getState) => {
  return dispatch(resetError())
}

const resetError = () => ({type: RESET_INVENTORY_ERROR})
