import React from 'react'
import { AppRouter } from 'bin/router'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { reducers } from 'reducers'
import thunk from 'redux-thunk'
import userApi from 'middleware/users'

// just some styles for the boys
import 'override.css';


const store = createStore(
  reducers,
  applyMiddleware(thunk, userApi)
)

render(
  <Provider store={store}>
    {AppRouter}
  </Provider>
  , document.getElementById('root')
)

store.dispatch({type: 'SET_RESERVATION_START_DATE', date: new Date('2000-02-02')})
store.dispatch({type: 'SET_RESERVATION_START_DATE', date: new Date('1984-02-28')})
store.dispatch({type: 'SET_RESERVATION_END_DATE', date: new Date('1984-05-28')})
store.dispatch({type: 'USER_REGISTER', username: 'TEST', password: 'PASSWORD'})
