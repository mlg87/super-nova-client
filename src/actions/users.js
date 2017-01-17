export const userRegister = (username, password) => {
  type: 'USER_REGISTER',
  username,
  password
}

export const userLogin = (username) => {
  type: 'USER_LOGIN',
  username
}

export const userLogout = (username) => {
  type: 'USER_LOGOUT',
  username
}
