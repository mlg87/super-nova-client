import React from 'react'
// material-ui requires the importing of a theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// needed for touch devices
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Shell } from '../Shell'

// init the touch event handler
injectTapEventPlugin()

// ok for this to be stateless
// the Shell component allows us to access the Route props
// in the Nav component (allowing us to display the subSideNav
// or not). this was the best solution i could come up with
// short of changing the app over to redux :/ -mg
const AppLayout = ({children}) => {
  return (
    <MuiThemeProvider >
      <div>
        <Shell children={ children }/>
      </div>
    </MuiThemeProvider>
  )
}

export default AppLayout
