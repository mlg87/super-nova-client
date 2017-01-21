import fetch from 'isomorphic-fetch'

// action creators
export const userRegisterFetch = (bool) => ({
  type: 'USER_REGISTER_FETCH',
  isFetching: bool
})

export const userRegisterSuccess = (token) => ({
  type: 'USER_REGISTER_SUCCESS',
  token
})

export const userRegisterError = (err) => ({
  type: 'USER_REGISTER_ERROR',
  err
})

export const userLogin = (username, password) => ({
  type: 'USER_LOGIN',
  username,
  password
})

export const userLogout = (username) => ({
  type: 'USER_LOGOUT',
  username
})

export const userRegisterApiCall = (username, password) => dispatch => {
  dispatch(userRegisterFetch(true))
  const user = {
    username,
    password
  }
  fetch('/api/auth/register', {
    method: 'post',
    // cookies and whatnot
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
    .then((res) => dispatch(userRegisterSuccess(res.token)))
    // NOTE: i think we need to change the server to properly
    // throw errs
    .catch((err) => {
      dispatch(userRegisterFetch(false))
      dispatch(userRegisterError(err))
    })
}
