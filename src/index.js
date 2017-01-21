import React from 'react'
import { AppRouter } from 'bin/router'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { reducers } from 'reducers'
import thunk from 'redux-thunk'
import DevTools from 'containers/DevTools'
// NOTE: this will be re-implemented when we get the API
// to work like danny's real-world example
// import userApi from 'middleware/users'

// just some styles for the boys
import 'override.css';

const store = createStore(
  reducers,
  compose(applyMiddleware(thunk),
  DevTools.instrument())
)

render(
  <Provider store={ store }>
    <div>
      { AppRouter }
      <DevTools />
    </div>
  </Provider>
  , document.getElementById('root')
)
