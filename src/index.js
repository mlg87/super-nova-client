import React from 'react'
import { AppRouter } from 'bin/router'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducers } from 'reducers'

// just some styles for the boys
import 'override.css';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(
  <Provider store={store}>
    {AppRouter}
  </Provider>
  , document.getElementById('root')
)
