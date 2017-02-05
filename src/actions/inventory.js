import fetch from 'isomorphic-fetch'
import { handleFetchErrors } from 'lib/helpers'

export const setModels = (models) => {
  return {
    type: 'SET_MODELS',
    payload: models
  }
}

export const fetchModels = () => dispatch => {
  const token = localStorage.getItem('token')
  fetch('/api/models', {
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

export const fetchSizes = (size_type) => dispatch => {
  const token = localStorage.getItem('token')
  fetch(`/api/sizes/${size_type}`, {
    method: 'get',
    headers: {
      'Authorization': 'Bearer ' + token
    }
  })
  .then(handleFetchErrors)
  .then((res) => {
    res.json().then(json => {
      dispatch(setSizes(json.data))
    })
  })
  .catch((err) => {console.log('fetch err:', err);})
}
