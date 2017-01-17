import fetch from 'isomorphic-fetch'

const authUrlBase = '/api/auth/'

const registerUser = (username, password) => {
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
      console.log('MIDDLEWARE FETCH RES: ', res);
      localStorage.setItem('token', json.token)
    })
  })
}

export default store => next => action => {
  if (action.type !== 'USER_REGISTER') {
    next(action)
  }
  registerUser(action.username, action.password)
  console.log('what is action middleware', action);
  // registerUser('jon')
}
