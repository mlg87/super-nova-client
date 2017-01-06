import React from 'react'
// material-ui requires the importing of a theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// needed for touch devices
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Nav } from '../components/nav/Nav'

// init the touch event handler
injectTapEventPlugin()

// ok for this to be stateless
const AppLayout = ({children}) => {
  const containerStyle = {
    // sum of sideNav and subSideNav widths
    marginLeft: '360px'
  }

  return (
    <MuiThemeProvider >
      <div>
        <Nav />
        <div className="container" style={ containerStyle }>
          { children }
        </div>
      </div>
    </MuiThemeProvider>
  )
}

export default AppLayout
