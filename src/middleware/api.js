import fetch from 'isomorphic-fetch'

// Extracts the next page URL from Github API response.
// NOTE: this is dannys, but we might be able to make use of it in the future
const getNextPageUrl = response => {
  const link = response.headers.get('link')
  if (!link) {
    return null
  }

  const nextLink = link.split(',').find(s => s.indexOf('rel="next"') > -1)
  if (!nextLink) {
    return null
  }

  return nextLink.split(';')[0].slice(1, -1)
}

// Fetches an API response and normalizes the result JSON
// This makes every API response have the same shape, regardless of how nested it was
// this function assumes that all responses from the server come back
// as JSON that is { data: whateverYouNeed }
const callApi = (endpoint, method, body) => {
  const fullUrl = `/api/${endpoint}`

  return fetch(fullUrl, {
    method: method,
    // by default, including the creds
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: body
  })
    .then(response =>
      response.json().then(json => {
        if (!response.ok) {
          // REVIEW: should this be: throw Error(`${response.status}: ${response.statusText}`)  ???
          return Promise.reject(json)
        }

        const nextPageUrl = getNextPageUrl(response)

        return {
          ...json,
          nextPageUrl
        }
      })
    )
}

// Action key that carries API call info interpreted by this middleware
// exported to be used in the action files
export const CALL_API = Symbol('Call API')

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
// next === store.dispatch
export default store => next => action => {
  const callAPI = action[CALL_API]
  // if the action does not have callAPI, on to the next
  if (typeof callAPI === 'undefined') {
    return next(action)
  }
  // get the endpoint, method, and action types from callAPI
  let { endpoint, body } = callAPI
  const { types, method } = callAPI
  // dannys code, not sure how we'll use this
  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState())
  }
  // endpoints MUST be strings
  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.')
  }
  // not all requests will have a body, so just turn it into an {}
  // if it doesnt
  if (typeof body === 'undefined') {
    body = ''
  }
  // make sure the body is a string (it should be stringified at this
  // point)
  if (typeof body !== 'string') {
    throw new Error('Expected the request body to be a string. What gives?')
  }
  // methods MUST be strings
  if (typeof method !== 'string') {
    throw new Error('Specify a string HTTP request method.')
  }
  // each GET must have three types: request, success and failure
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }
  // all types must be strings
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.')
  }
  // data is an action e.g. {type: 'USERS_GET_REQUEST'}
  const actionWith = data => {
    // easiest to think of finalAction as the last time we massage
    // the action to create a proper redux action
    const finalAction = {...action, ...data}
    delete finalAction[CALL_API]
    return finalAction
  }

  const [ requestType, successType, failureType ] = types
  next(actionWith({ type: requestType }))


  console.error('ABOUT TO CALL THE FUCKING API');
  return callApi(endpoint, method, body).then(
    response => next(actionWith({
      response,
      type: successType
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || 'Something weally bad happened'
    }))
  )
}
