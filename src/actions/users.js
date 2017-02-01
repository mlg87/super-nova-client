import fetch from 'isomorphic-fetch'
import { push } from 'react-router-redux'
import { CALL_API } from 'middleware/api'
// need to get this for the res of logging in
// in the future, the API calls will be in a seperate
// middleware file
import { setUserId, unsetUserId } from 'actions'

// keys each constructor will need:
// 1) endpoint
// 2) cb (possibly two: one for success and one for failure)
// 3) method (GET, POST, DELETE, etc)
// 4) headers? or can this be done in the api file?

///////////////////////////////////////////////////////////////////////
// GET - all users
export const USERS_GET_REQUEST = 'USERS_GET_REQUEST'
export const USERS_GET_SUCCESS = 'USERS_GET_SUCCESS'
export const USERS_GET_FAILURE = 'USERS_GET_FAILURE'

// fetches all users for a given client
const fetchUsersGet = () => ({
  [CALL_API]: {
    types: [ USERS_GET_REQUEST, USERS_GET_SUCCESS, USERS_GET_FAILURE],
    endpoint: 'users/all',
    method: 'get'
  }
})

export const usersGet = () => (dispatch, getState) => {
  // the reason we would want to take in getState would be to check if
  // we have all the users already in state, but my gut says we should
  // just make the fetch in case the users array has changed
  return dispatch(fetchUsersGet())
}
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
// POST - register a single user
export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST'
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS'
export const USER_REGISTER_FAILURE = 'USER_REGISTER_FAILURE'

// fetches a post to register a single user
const fetchUserRegister = (user) => ({
  [CALL_API]: {
    types: [ USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAILURE ],
    endpoint: 'auth/register',
    method: 'post',
    body: JSON.stringify({user})
  }
})

export const userRegister = (username, password) => dispatch => {
  const user = {
    username,
    password
  }
  return dispatch(fetchUserRegister(user))
  .then(() => {
    // sending the user back to the users view will 'close' the modal
    dispatch(push('/users'))
    // an alternative to this would be to push in the user we just created
    // but the server doesnt return the user currently. should prolly make
    // it do that
    dispatch(fetchUsersGet())
  })
}
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
// POST - login a single user
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE'

// fetches a post to login a single user
const fetchUserLogin = (user) => ({
  [CALL_API]: {
    types: [ USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE ],
    endpoint: 'auth/login',
    method: 'post',
    body: JSON.stringify({user})
  }
})

export const userLogin = (username, password) => dispatch => {
  const user = {
    username,
    password
  }
  return dispatch(fetchUserLogin(user))
  .then((res) => {
    const { id, token } = res.response
    localStorage.setItem('token', token)
    dispatch(setUserId(id))
  })
}
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
// NO API - logs out a single user
export const USER_LOGOUT = 'USER_LOGOUT'

export const userLogout = (id) => ({
  type: USER_LOGOUT,
  id
})

export const userLogoutCall = id => dispatch => {
  dispatch(userLogout(id))
  localStorage.removeItem('token')
  dispatch(unsetUserId())
}
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
// DELETE - deletes one or more users
export const USERS_DELETE_REQUEST = 'USERS_DELETE_REQUEST'
export const USERS_DELETE_SUCCESS = 'USERS_DELETE_SUCCESS'
export const USERS_DELETE_FAILURE = 'USERS_DELETE_FAILURE'

export const USERS_PULL_DELETED = 'USERS_PULL_DELETED'

// fetches a delete to remove one or more users
const fetchUsersDelete = (ids) => ({
  [CALL_API]: {
    types: [ USERS_DELETE_REQUEST, USERS_DELETE_SUCCESS, USERS_DELETE_FAILURE ],
    endpoint: 'users/remove',
    method: 'delete',
    body: JSON.stringify({ids})
  }
})

// this action gets the user that has just been deleted out of the
// users GET arr so we avoid another trip to server
const usersPullDeleted = (id) => ({
  type: USERS_PULL_DELETED,
  id
})

export const usersDelete = ids => dispatch => {
  return dispatch(fetchUsersDelete(ids))
  .then((res) => {
    console.log('delete res', res);
    // reset the arr of selected users in state
    dispatch(usersUpdateSelected([]))
    ids.forEach((id) => {
      dispatch(usersPullDeleted(id))
    })
    // user deletion happens at /users/remove, so send them back to users on success
    dispatch(push('/users'))
  })
}

///////////////////////////////////////////////////////////////////////

// constants - users get
// export const USERS_GET_FETCH = 'USERS_GET_FETCH'
// export const USERS_GET_SUCCESS = 'USERS_GET_SUCCESS'
// export const USERS_GET_ERROR = 'USERS_GET_ERROR'
// action creators - users get
// export const usersGetFetch = (isFetching) => ({
//   type: USERS_GET_FETCH,
//   isFetching
// })
//
// export const usersGetSuccess = (payload) => ({
//   type: USERS_GET_SUCCESS,
//   payload
// })
//
// export const usersGetError = (payload) => ({
//   type: USERS_GET_ERROR,
//   payload
// })



// middleware api call
// export const usersGetApiCall = () => dispatch => {
//   dispatch(usersGetFetch(true))
//   return fetch('/api/users/all', {
//     method: 'get',
//     credentials: 'include', //pass cookies, for authentication
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//   .then((res) => {
//     if (!res.ok) {
//       throw Error(`${res.status}: ${res.statusText}`)
//     }
//     return res.json()
//   })
//   .then((json) => {
//     dispatch(usersGetFetch(false))
//     dispatch(usersGetSuccess(json.data))
//   })
//   .catch((err) => {
//     dispatch(usersGetFetch(false))
//     dispatch(usersGetError(err))
//   })
// }

// constants - user registration
// export const USER_REGISTER_FETCH = 'USER_REGISTER_FETCH'
// export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS'
// export const USER_REGISTER_ERROR = 'USER_REGISTER_ERROR'

// action creators - user registration
// export const userRegisterFetch = (isFetching) => ({
//   type: USER_REGISTER_FETCH,
//   isFetching
// })
//
// // TODO: change the server to return something here other than the token for the
// // created user (since another user will be making the new user)
// export const userRegisterSuccess = () => ({
//   type: USER_REGISTER_SUCCESS,
// })
//
// export const userRegisterError = (payload) => ({
//   type: USER_REGISTER_ERROR,
//   // payload is err
//   payload
// })

// middleware api call
// export const userRegisterApiCall = (username, password) => dispatch => {
//   dispatch(userRegisterFetch(true))
//   const user = {
//     username,
//     password
//   }
//   // return promise
//   return fetch('/api/auth/register', {
//     method: 'post',
//     //pass cookies, for authentication
//     credentials: 'include',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({user})
//   })
//   .then((res) => {
//     if (!res.ok) {
//       throw Error(`${res.status}: ${res.statusText}`)
//     }
//     return res.json()
//   })
//   .then((json) => {
//     dispatch(userRegisterFetch(false))
//     return json
//   })
//   .then((res) => {
//     dispatch(userRegisterSuccess('success'))
//     // dispatch(usersGetApiCall())
//     // user creation happens at /users/add, so send them back to users on success
//     dispatch(push('/users'))
//   })
//   // throw errs
//   .catch((err) => {
//     dispatch(userRegisterFetch(false))
//     dispatch(userRegisterError(err))
//   })
// }

// constants - user login process
// export const USER_LOGIN_FETCH = 'USER_LOGIN_FETCH'
// export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
// export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR'
//
// // action creators - user login process
// export const userLoginFetch = (isFetching) => ({
//   type: USER_LOGIN_FETCH,
//   isFetching
// })
//
// export const userLoginSuccess = () => ({
//   type: USER_LOGIN_SUCCESS
// })
//
// export const userLoginError = (payload) => ({
//   type: USER_LOGIN_ERROR,
//   payload
// })
//
// // middleware api call
// export const userLoginApiCall = (username, password) => dispatch => {
//   dispatch(userLoginFetch(true))
//   const user = {
//     username,
//     password
//   }
//   // return promise
//   return fetch('/api/auth/login', {
//     method: 'post',
//     credentials: 'include', //pass cookies, for authentication
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({user})
//   })
//   .then((res) => {
//     if (!res.ok) {
//       throw Error(`${res.status}: ${res.statusText}`)
//     }
//     return res.json()
//   })
//   .then((json) => {
//     dispatch(userLoginFetch(false))
//     return json
//   })
//   .then((res) => {
//     dispatch(userLoginSuccess())
//     // these are seperate actions bc of how we set them up. we could easily refactor
//     // to make them one
//     dispatch(setUserId(res.id))
//     // id like to find a way to do this outside of localStorage
//     localStorage.setItem('token', res.token)
//   })
//   .catch((err) => {
//     dispatch(userLoginFetch(false))
//     dispatch(userLoginError(err))
//   })
// }

// export const USER_LOGOUT = 'USER_LOGOUT'
//
// export const userLogout = (id) => ({
//   type: USER_LOGOUT,
//   id
// })
//
// export const userLogoutCall = (id) => dispatch => {
//   dispatch(userLogout(id))
//   localStorage.removeItem('token')
//   dispatch(unsetUserId())
// }

export const USERS_RESET_ERR = 'USERS_RESET_ERR'

export const usersResetErr = () => ({
  type: USERS_RESET_ERR
})

export const USERS_UPDATE_SELECTED = 'USERS_UPDATE_SELECTED'

// NOTE: solid chance that this is how its actually supposed to work and Table
// is being finicky right now
// export const usersUpdateSelected = (index) => ({
//   type: USERS_UPDATE_SELECTED,
//   index
// })

export const usersUpdateSelected = (indexes) => ({
  type: USERS_UPDATE_SELECTED,
  indexes
})

// // constants - users delete
// export const USERS_DELETE_FETCH = 'USERS_DELETE_FETCH'
// export const USERS_DELETE_SUCCESS = 'USERS_DELETE_SUCCESS'
// export const USERS_DELETE_ERROR = 'USERS_DELETE_ERROR'
//
// // action creators - users remove
// export const usersDeleteFetch = (isFetching) => ({
//   type: USERS_DELETE_FETCH,
//   isFetching
// })
//
// export const usersDeleteSuccess = () => ({
//   type: USERS_DELETE_SUCCESS
// })
//
// export const usersDeleteError = (payload) => ({
//   type: USERS_DELETE_ERROR,
//   payload
// })
//
// export const usersDeleteApiCall = (userIds) => dispatch => {
//   dispatch(usersDeleteFetch(true))
//   const ids = userIds
//   // return promise
//   return fetch('/api/users/remove', {
//     method: 'delete',
//     credentials: 'include', //pass cookies, for authentication
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ids})
//   })
//   .then((res) => {
//     if (!res.ok) {
//       throw Error(`${res.status}: ${res.statusText}`)
//     }
//     return res.json()
//   })
//   .then((json) => {
//     dispatch(usersDeleteFetch(false))
//     return json
//   })
//   .then((res) => {
//     dispatch(usersDeleteSuccess())
//     dispatch(usersUpdateSelected([]))
//     res.data.forEach((userId) => {
//       dispatch(usersPullDeleted(userId))
//     })
//     // user deletion happens at /users/remove, so send them back to users on success
//     dispatch(push('/users'))
//   })
//   .catch((err) => {
//     dispatch(usersDeleteFetch(false))
//     dispatch(usersDeleteError(err))
//   })
// }
