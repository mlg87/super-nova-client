import fetch from 'isomorphic-fetch'
import { setUserId } from 'actions'

// constants - user registration
const USER_REGISTER_FETCH = 'USER_REGISTER_FETCH'
const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS'
const USER_REGISTER_ERROR = 'USER_REGISTER_ERROR'

// action creators - user registration
export const userRegisterFetch = (bool) => ({
  type: USER_REGISTER_FETCH,
  isFetching: bool
})

// TODO: change the server to return something here other than the token for the
// created user (since another user will be making the new user)
export const userRegisterSuccess = () => ({
  type: USER_REGISTER_SUCCESS
})

export const userRegisterError = (err) => ({
  type: USER_REGISTER_ERROR,
  err
})

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
  .then((res) => res.json())
  .then((json) => {
    if (!json.token) {
      throw Error('User registration failed. Better error message coming soon...')
    }
    dispatch(userRegisterFetch(false))
    return json
  })
  .then((res) => {
    dispatch(userRegisterSuccess())
  })
  // throw errs
  .catch((err) => {
    dispatch(userRegisterFetch(false))
    dispatch(userRegisterError(err))
  })
}

// constants - user login process
const USER_LOGIN_FETCH = 'USER_LOGIN_FETCH'
const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR'

// action creators - user login process
export const userLoginFetch = (bool) => ({
  type: USER_LOGIN_FETCH,
  isFetching: bool
})

export const userLoginSuccess = () => ({
  type: USER_LOGIN_SUCCESS
})

export const userLoginError = (err) => ({
  type: USER_LOGIN_ERROR,
  err
})

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
  .then((res) => res.json())
  .then((json) => {
    if (!json.token) {
      throw Error('Login failed. We need a more descriptive error message here...')
    }
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
