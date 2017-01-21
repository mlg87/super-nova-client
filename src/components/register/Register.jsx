import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
// components
import UserRegisterForm from 'components/form/UserRegisterForm'
import Snackbar from 'material-ui/Snackbar'
import { userRegisterApiCall, userRegisterError } from 'actions/users'

const Register = (props) => {
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

  const { handleSubmit, onRequestClose, err } = props

  return (
    <div style={ containerStyle }>
      <UserRegisterForm onSubmit={ handleSubmit } />
      <Snackbar
        open={ !!err.message }
        message={ !!err.message ? err.message : ''}
        autoHideDuration={ 4000 }
        bodyStyle={ errSnackBarStyle }
        contentStyle={ errSnackBarContentStyle }
        onRequestClose={ onRequestClose }
      />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  // userApiError is from the reducer
  const err = state.userApiError

  return { err }
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
  err: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  onRequestClose: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
