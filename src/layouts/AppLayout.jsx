import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
// material-ui requires the importing of a theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// needed for touch devices
import injectTapEventPlugin from 'react-tap-event-plugin'
// components
import { Login } from 'components/login/Login'
import { Shell } from 'components/shell/Shell'
import { FullPageLoading } from 'layouts/FullPageLoading'

// init the touch event handler (needed for material-ui, also prevents
// console errs)
injectTapEventPlugin()

// the Shell component allows us to access the Route props
// in the Nav component (allowing us to display the subSideNav
// or not). this was the best solution i could come up with
// short of changing the app over to redux :/ -mg
export default class AppLayout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      isUserLoggedIn: false
    }
  }

  componentWillMount() {
    // check to see if a user is logged in before they can
    // access the app
    let token = localStorage.getItem('token')
    if (token) {
      fetch('/api/auth/current_user', {
        method: 'get',
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })
      .then((res) => {
        // user has a legit token, they may proceed
        this.setState({
          isLoading: false,
          isUserLoggedIn: true
        })
      })
      .catch((err) => {
        // they have a token, but its expired
        this.setState({
          isLoading: false,
          isUserLoggedIn: false
        })
      })
    } else {
      // no token, so they must log in
      this.setState({
        isLoading: false,
        isUserLoggedIn: false
      })
    }
  }

  render() {
    const desiredRoute = this.props.children.props.route.path
    const routeGo = this.props.router.go

    return (
      <MuiThemeProvider >
        { this.state.isLoading ?
          <FullPageLoading /> :
          <div>
            { this.state.isUserLoggedIn ?
              <Shell children={ this.props.children }/> :
              <Login desiredRoute={ desiredRoute} routeGo={ routeGo} />
            }
          </div>
        }
      </MuiThemeProvider>
    )
  }
}
