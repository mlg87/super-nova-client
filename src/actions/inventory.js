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



export const setSizes = (sizes) => {
  return {
    type: 'SET_SIZES',
    payload: sizes
  }
}

export const fetchSizes = (item_type_id) => dispatch => {
  const token = localStorage.getItem('token')
  fetch(`/api/sizes/item_type/${item_type_id}`, {
    method: 'get',
    headers: {
      'Authorization': 'Bearer ' + token
    }
  })
  .then(handleFetchErrors)
  .then((res) => {
    res.json().then(json => {
      console.log('in fetchSizes', json.data);
      dispatch(setSizes(json.data))
    })
  })
  .catch((err) => {console.log('fetch err:', err);})
}

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

export const setItemTypes = (itemTypes) => {
  return {
    type: 'SET_ITEM_TYPES',
    payload: itemTypes
  }
}

export const fetchItemTypes = (category_id) => dispatch => {
  const token = localStorage.getItem('token')
  fetch(`/api/item_types/some?category_id=${category_id}`, {
    method: 'get',
    headers: {
      'Authorization': 'Bearer ' + token
    }
  })
  .then(handleFetchErrors)
  .then((res) => {
    res.json().then(json => {
      dispatch(setItemTypes(json.data))
    })
  })
  .catch((err) => {console.log('fetch err:', err);})
}
