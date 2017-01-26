import React, { Component, PropTypes } from 'react'
import fetch from 'isomorphic-fetch'
// material-ui requires the importing of a theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// needed for touch devices
import injectTapEventPlugin from 'react-tap-event-plugin'
// components
import Login from 'components/login/Login'
import Shell from 'components/shell/Shell'
import { FullPageLoading } from 'layouts/FullPageLoading'
import { connect } from 'react-redux'
import { setUserId, unsetUserId, dataLoaded } from 'actions'

// init the touch event handler (needed for material-ui, also prevents
// console errs)
injectTapEventPlugin()

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  userId: state.userId
})

const mapDispatchToProps = dispatch => ({
  checkUserToken: () => {
    let token = localStorage.getItem('token')
    if (!!token) {
      fetch('/api/auth/current_user', {
        method: 'get',
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })
      .then((res) => {
        res.json().then(({ data }) => {
          dispatch(setUserId(data.id))
          dispatch(dataLoaded())
        })
      })
      .catch(err => {
        dispatch(unsetUserId())
        dispatch(dataLoaded())
      })
    } else {
      dispatch(dataLoaded())
    }
  }
})

// the Shell component allows us to access the Route props
// in the Nav component (allowing us to display the subSideNav
// or not). this was the best solution i could come up with
// short of changing the app over to redux :/ -mg
class AppLayout extends Component {
  constructor(props) {
    super(props)
    // check to see if a user is logged in before they can
    // access the app
    props.checkUserToken()
  }

  render() {
    const { props } = this
    const desiredRoute = props.children.props.route.path
    return (
      <MuiThemeProvider >
        { props.isLoading ?
          <FullPageLoading /> :
          props.userId ?
          <Shell children={ props.children } /> :
          <Login desiredRoute={ desiredRoute } routeGo={ props.router.go } />
        }
      </MuiThemeProvider>
    )
  }
}

AppLayout.propTypes = {
  checkUserToken: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  userId: PropTypes.number,
  router: PropTypes.object,
  children: PropTypes.element.isRequired
}

export default AppLayout = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppLayout)
