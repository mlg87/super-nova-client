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
// GET - sizes with item_type_id

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
