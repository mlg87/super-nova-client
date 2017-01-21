import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
// components
import UserRegisterForm from 'components/form/UserRegisterForm'
import Snackbar from 'material-ui/Snackbar'
import { userRegisterApiCall, userRegisterError } from 'actions/users'

class Register extends Component {
  getFields() {
    return [
      {
        name: 'username',
        component: 'TextField'
      },
      {
        name: 'password',
        component: 'TextField'
      },
      {
        name: 'password_confirm',
        component: 'TextField'
      }
    ]
  }

  render() {
    const containerStyle = {
      width: '50%',
      marginTop: '20px',
      marginLeft: 'auto',
      marginRight: 'auto'
    }

    const errSnackBarStyle = {
      backgroundColor: 'red'
    }

    const errSnackBarContentStyle = {
      color: 'white'
    }

    const { handleSubmit, isOpen, errMsg } = this.props

    return (
      <div style={ containerStyle }>
        <UserRegisterForm
          onSubmit={ handleSubmit }
        />
        <Snackbar
          open={ !!this.props.err.message }
          message={ !!this.props.err.message ? this.props.err.message : ''}
          autoHideDuration={ 4000 }
          bodyStyle={ errSnackBarStyle }
          contentStyle={ errSnackBarContentStyle }
          onRequestClose={ this.props.userRegisterError }
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const isOpen = false
  const err = state.userRegisterError

  return {
    isOpen,
    err
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: (values) => {
      let user = {...values}
      delete user.password_confirm
      dispatch(userRegisterApiCall(user.username, user.password))
    },
    onRequestClose: () => dispatch(userRegisterError(false))
  }
}

Register.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  err: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
