import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
// components
import UserRegisterForm from 'components/UserRegisterForm'
import Dialog from 'material-ui/Dialog'
import Snackbar from 'material-ui/Snackbar'
import { userRegisterApiCall, usersResetErr } from 'actions/users'

const Register = (props) => {
  const { handleSubmit, onRequestClose, err } = props
  const { returnPath } = props.route

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

  return (
    <div style={ containerStyle }>
      <Dialog
        open={ true }
        title='Register A New User'
      >
        <UserRegisterForm onSubmit={ handleSubmit } returnPath={ returnPath } />
      </Dialog>
      <Snackbar
        open={ !!err }
        message={ !!err ? err.message : ''}
        autoHideDuration={ 4000 }
        bodyStyle={ errSnackBarStyle }
        contentStyle={ errSnackBarContentStyle }
        onRequestClose={ onRequestClose }
      />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  // HACK: the redux state dealing with this could use
  // a refactor, but short of that, this works for now
  let err = state.userApiRes
  if (err instanceof Error) {
    return { err }
  } else {
    return {}
  }

}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: (values) => {
      let user = {...values}
      delete user.password_confirm
      return dispatch(userRegisterApiCall(user.username, user.password))
    },
    onRequestClose: () => dispatch(usersResetErr(null))
  }
}

Register.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onRequestClose: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
