import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
// material-ui requires the importing of a theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// needed for touch devices
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Login } from '../components/login/Login'
import { Shell } from '../Shell'

// init the touch event handler
injectTapEventPlugin()

const isUserLoggedIn = () => {

}

// the Shell component allows us to access the Route props
// in the Nav component (allowing us to display the subSideNav
// or not). this was the best solution i could come up with
// short of changing the app over to redux :/ -mg
export default class AppLayout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isUserLoggedIn: false
    }
  }

  componentWillMount() {
    let token = localStorage.getItem('token')
    if (token) {
      fetch('/auth/current_user', {
        method: 'get',
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })
      .then((res) => {
        // user has a legit token, they may proceed
        this.setState({isUserLoggedIn: true})
      })
      .catch((err) => {
        // they have a token, but its expired
        this.setState({isUserLoggedIn: false})
      })
    } else {
      // no token, so they must log in
      this.setState({isUserLoggedIn: false})
    }
  }

  render() {
    return (
      <MuiThemeProvider >
        { this.state.isUserLoggedIn ?
          <Shell children={ this.props.children }/> :
          <Login />
        }
      </MuiThemeProvider>
    )
  }
}
