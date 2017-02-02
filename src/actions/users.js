import { push } from 'react-router-redux'
import { CALL_API } from 'middleware/api'
import { setUserId, unsetUserId } from 'actions'

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
// action pulls deleted users from the users arr in state
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
// THIS WILL BE MOVED TO A DIFFERENT CONFIG SETUP FOR STATE
export const USERS_RESET_ERR = 'USERS_RESET_ERR'

export const usersResetErr = () => ({
  type: USERS_RESET_ERR
})
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
// works with the user table and stores those that are selected
export const USERS_UPDATE_SELECTED = 'USERS_UPDATE_SELECTED'

export const usersUpdateSelected = (indexes) => ({
  type: USERS_UPDATE_SELECTED,
  indexes
})
///////////////////////////////////////////////////////////////////////
