// NOTE: THIS FILE IS CURRENTLY NOT USED, BUT I WOULD LIKE
// TO MOVE US TO HANDLING API CALLS THIS WAY. I JUST GOT
// SICK OF BANGING MY HEAD AGAINST THE WALL -mg


// import fetch from 'isomorphic-fetch'
// import * as userActions from 'actions/users'
//
// const authUrlBase = '/api/auth/'
//
// const userRegisterAPICall = (username = '', password = '') => {
//   const user = {
//     username,
//     password
//   }
//
//   fetch(authUrlBase + 'register', {
//     method: 'post',
//     // cookies and whatnot
//     credentials: 'include',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({user})
//   })
//   .then(res => {
//     res.json().then( json => {
//       console.log('what is json', json);
//       if (!res.token) {
//         return Promise.reject(json)
//       }
//       // shouldnt do this bc a logged in user is registering other users
//       // localStorage.setItem('token', json.token)
//
//       return userActions.userRegisterSuccess(json.token)
//     })
//   })
// }

// export default store => next => action => {
//   if (action.type !== 'USER_REGISTER') {
//     return next(action)
//   }
//   return userRegisterAPICall(action.username, action.password).then(() => {
//     console.log('sup babies');
//   })
// }


// OUR APP
// next === store.dispatch
// export default store => next => action => {
//   next(action)
//
//   actions.types
//   fetch(whater).then(
//     next(actions.cb.success)
//   )
//   .catch(err
//     actions.cb.err()
//   )
//
//   switch (action.type) {
//     case 'USER_REGISTER':
//       const user = {
//         username: action.username,
//         password: action.password
//       }
//
//       fetch(authUrlBase + 'register', {
//         method: 'post',
//         // cookies and whatnot
//         credentials: 'include',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({user})
//       })
//       .then(res => {
//         res.json().then( json => {
//           console.log('dafuq is json', json);
//           if (!res.token) {
//             return next(userActions.userRegisterError(res))
//           }
//           // shouldnt do this bc a logged in user is registering other users
//           // localStorage.setItem('token', json.token)
//
//           return next(userActions.userRegisterSuccess(json.token))
//         })
//       })
//     break
//     default:
//       break
//   }
// }


// DANNY EXAMPLE
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
