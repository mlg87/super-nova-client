import React from 'react'
import { AppRouter } from 'lib/router'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { store } from 'lib/router'
import DevTools from 'containers/DevTools'
// needed for touch devices
import injectTapEventPlugin from 'react-tap-event-plugin'

// NOTE: this will be re-implemented when we get the API
// to work like danny's real-world example
// import userApi from 'middleware/users'

// just some styles for the boys
import 'override.css';

// init the touch event handler (needed for material-ui, also prevents
// console errs)
injectTapEventPlugin()

render(
  <Provider store={ store }>
    <div>
      { AppRouter }
      <DevTools />
    </div>
  </Provider>
  , document.getElementById('root')
)
