import fetch from 'isomorphic-fetch'
import { handleFetchErrors } from 'lib/helpers'

export const setModels = (models) => {
  return {
    type: 'SET_MODELS',
    payload: models
  }
}

export const fetchModels = (item_type_id) => dispatch => {
  const token = localStorage.getItem('token')
  fetch(`/api/models/some?item_type_id=${item_type_id}`, {
    method: 'get',
    headers: {
      'Authorization': 'Bearer ' + token
    }
  })
  .then(handleFetchErrors)
  .then((res) => {
    res.json().then(json => {
      dispatch(setModels(json.data))
    })
  })
  .catch((err) => {console.log('fetch err:', err);})
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
