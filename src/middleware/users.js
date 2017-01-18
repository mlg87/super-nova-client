import fetch from 'isomorphic-fetch'

const authUrlBase = '/api/auth/'

const registerUser = (username = '', password = '') => {
  const user = {
    username,
    password
  }

  fetch(authUrlBase + 'register', {
    method: 'post',
    // cookies and whatnot
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({user})
  })
  .then((res) => {
    res.json().then( json => {
      localStorage.setItem('token', json.token)
    })
  })
}

export default store => next => action => {
  if (action.type !== 'USER_REGISTER') {
    return next(action)
  }
  registerUser(action.username, action.password)
}



// // A Redux middleware that interprets actions with CALL_API info specified.
// // Performs the call and promises when such actions are dispatched.
// export default store => next => action => {
//   const callAPI = action[CALL_API]
//   if (typeof callAPI === 'undefined') {
//     return next(action)
//   }
//
//   let { endpoint } = callAPI
//   const { schema, types } = callAPI
//
//   if (typeof endpoint === 'function') {
//     endpoint = endpoint(store.getState())
//   }
//
//   if (typeof endpoint !== 'string') {
//     throw new Error('Specify a string endpoint URL.')
//   }
//   if (!schema) {
//     throw new Error('Specify one of the exported Schemas.')
//   }
//   if (!Array.isArray(types) || types.length !== 3) {
//     throw new Error('Expected an array of three action types.')
//   }
//   if (!types.every(type => typeof type === 'string')) {
//     throw new Error('Expected action types to be strings.')
//   }
//
//   const actionWith = data => {
//     const finalAction = Object.assign({}, action, data)
//     delete finalAction[CALL_API]
//     return finalAction
//   }
//
//   const [ requestType, successType, failureType ] = types
//   next(actionWith({ type: requestType }))
//
//   return callApi(endpoint, schema).then(
//     response => next(actionWith({
//       response,
//       type: successType
//     })),
//     error => next(actionWith({
//       type: failureType,
//       error: error.message || 'Something bad happened'
//     }))
//   )
// }
