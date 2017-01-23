import React from 'react'
import { AppRouter } from 'bin/router'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { store } from 'bin/router'
import DevTools from 'containers/DevTools'

// NOTE: this will be re-implemented when we get the API
// to work like danny's real-world example
// import userApi from 'middleware/users'

// just some styles for the boys
import 'override.css';

render(
  <Provider store={ store }>
    <div>
      { AppRouter }
      <DevTools />
    </div>
  </Provider>
  , document.getElementById('root')
)
