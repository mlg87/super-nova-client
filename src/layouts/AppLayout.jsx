import React, { Component, PropTypes } from 'react'
import fetch from 'isomorphic-fetch'
// material-ui requires the importing of a theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// components
import Login from 'components/Login'
import Shell from 'components/Shell'
import Snackbar from 'material-ui/Snackbar'
import { FullPageLoading } from 'layouts/FullPageLoading'
import { connect } from 'react-redux'
import { setUserId, unsetUserId, dataLoaded, resetConfigError } from 'actions'
import { handleFetchErrors } from 'lib/helpers'

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
    const { error, onRequestClose } = props

    const desiredRoute = props.children.props.route.path

    const errorSnackBarStyle = {
      backgroundColor: 'red'
    }

    const errorSnackBarContentStyle = {
      color: 'white'
    }

    return (
      <MuiThemeProvider >
        <div>
          { props.isLoading ?
            <FullPageLoading /> :
            props.userId ?
            <Shell children={ props.children } /> :
            <Login desiredRoute={ desiredRoute } routeGo={ props.router.go } />
          }
          <Snackbar
            open={ !!error }
            message={ !!error ? error : ''}
            autoHideDuration={ 4000 }
            bodyStyle={ errorSnackBarStyle }
            contentStyle={ errorSnackBarContentStyle }
            onRequestClose={ onRequestClose }
           />
       </div>
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

const mapStateToProps = state => {
  const { isLoading, userId } = state
  const { error } = state.config

  return {
    isLoading,
    userId,
    error
  }
}

const mapDispatchToProps = dispatch => ({
  // this is for the snackbar
  onRequestClose: () => {
    dispatch(resetConfigError())
  },
  checkUserToken: () => {
    let token = localStorage.getItem('token')
    if (!!token) {
      fetch('/api/auth/current_user', {
        method: 'get',
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })
      .then(handleFetchErrors)
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

export default AppLayout = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppLayout)
