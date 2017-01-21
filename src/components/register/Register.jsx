import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
// components
import UserRegisterForm from 'components/form/UserRegisterForm'
import Snackbar from 'material-ui/Snackbar'
import { userRegisterApiCall } from 'actions/users'

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

  // TODO: figure out how to display errs using the USER_REGISTER_ERROR action and getting it from state
  resetSnackBar() {
    this.setState({
      isOpen: false,
      errMsg: ''
    })
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
          onRequestClose={ this.resetSnackBar.bind(this) }
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
    }
  }
}

Register.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  err: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
