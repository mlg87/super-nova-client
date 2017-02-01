import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
// components
import UserLoginForm from 'components/UserLoginForm'
import Snackbar from 'material-ui/Snackbar'
import { userLogin, usersResetErr } from 'actions/users'

const Login = (props) => {
  const containerStyle = {
    width: '30%',
    marginTop: '100px',
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
      <UserLoginForm onSubmit={ handleSubmit } />
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
  const err = state.userApiRes

  return { err }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: (values) => {
      let user = {...values}
      dispatch(userLogin(user.username, user.password))
    },
    onRequestClose: () => dispatch(usersResetErr())
  }
}

Login.propTypes = {
  err: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  onRequestClose: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
