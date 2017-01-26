import fetch from 'isomorphic-fetch'
import { push } from 'react-router-redux'
import { setUserId } from 'actions'

// constants - user registration
export const USER_REGISTER_FETCH = 'USER_REGISTER_FETCH'
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS'
export const USER_REGISTER_ERROR = 'USER_REGISTER_ERROR'

// action creators - user registration
export const userRegisterFetch = (isFetching) => ({
  type: USER_REGISTER_FETCH,
  isFetching
})

// TODO: change the server to return something here other than the token for the
// created user (since another user will be making the new user)
export const userRegisterSuccess = (payload) => ({
  type: USER_REGISTER_SUCCESS,
  // payload is a string
  payload
})

export const userRegisterError = (payload) => ({
  type: USER_REGISTER_ERROR,
  // payload is err
  payload
})

// middleware api call
export const userRegisterApiCall = (username, password) => dispatch => {
  dispatch(userRegisterFetch(true))
  const user = {
    username,
    password
  }
  // return promise
  return fetch('/api/auth/register', {
    method: 'post',
    //pass cookies, for authentication
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({user})
  })
  .then((res) => {
    if (!res.ok) {
      throw Error(`${res.status}: ${res.statusText}`)
    }
    return res.json()
  })
  .then((json) => {
    dispatch(userRegisterFetch(false))
    return json
  })
  .then((res) => {
    dispatch(userRegisterSuccess('success'))
    // user creation happens at /users/add, so send them back to users on success
    dispatch(push('/users'))
  })
  // throw errs
  .catch((err) => {
    dispatch(userRegisterFetch(false))
    dispatch(userRegisterError(err))
  })
}

// constants - user login process
export const USER_LOGIN_FETCH = 'USER_LOGIN_FETCH'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR'

// action creators - user login process
export const userLoginFetch = (isFetching) => ({
  type: USER_LOGIN_FETCH,
  isFetching
})

export const userLoginSuccess = (payload) => ({
  type: USER_LOGIN_SUCCESS,
  payload
})

export const userLoginError = (payload) => ({
  type: USER_LOGIN_ERROR,
  payload
})

// middleware api call
export const userLoginApiCall = (username, password) => dispatch => {
  dispatch(userLoginFetch(true))
  const user = {
    username,
    password
  }
  // return promise
  return fetch('/api/auth/login', {
    method: 'post',
    credentials: 'include', //pass cookies, for authentication
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({user})
  })
  .then((res) => {
    if (!res.ok) {
      throw Error(`${res.status}: ${res.statusText}`)
    }
    return res.json()
  })
  .then((json) => {
    dispatch(userLoginFetch(false))
    return json
  })
  .then((res) => {
    dispatch(userLoginSuccess())
    // these are seperate actions bc of how we set them up. we could easily refactor
    // to make them one
    dispatch(setUserId(res.id))
    // id like to find a way to do this outside of localStorage
    localStorage.setItem('token', res.token)
  })
  .catch((err) => {
    dispatch(userLoginFetch(false))
    dispatch(userLoginError(err))
  })
}

export const userLogout = (username) => ({
  type: 'USER_LOGOUT',
  username
})

// constants - users get
export const USERS_GET_FETCH = 'USERS_GET_FETCH'
export const USERS_GET_SUCCESS = 'USERS_GET_SUCCESS'
export const USERS_GET_ERROR = 'USERS_GET_ERROR'

// action creators - users get
export const usersGetFetch = (isFetching) => ({
  type: USERS_GET_FETCH,
  isFetching
})

export const usersGetSuccess = (payload) => ({
  type: USERS_GET_SUCCESS,
  payload
})

export const usersGetError = (payload) => ({
  type: USERS_GET_ERROR,
  payload
})

// middleware api call
export const usersGetApiCall = (query) => dispatch => {
  dispatch(usersGetFetch(true))
  return fetch('/api/users/all', {
    method: 'get',
    credentials: 'include', //pass cookies, for authentication
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((res) => {
    if (!res.ok) {
      throw Error(`${res.status}: ${res.statusText}`)
    }
    return res.json()
  })
  .then((json) => {
    dispatch(usersGetFetch(false))
    return json
  })
  .then((res) => {
    dispatch(usersGetSuccess(res.data))
  })
  .catch((err) => {
    dispatch(usersGetFetch(false))
    dispatch(usersGetError(err))
  })
}

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
