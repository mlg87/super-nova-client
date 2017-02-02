import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
// components
import UserLoginForm from 'components/UserLoginForm'
import { userLogin } from 'actions/users'

const Login = (props) => {
  const containerStyle = {
    width: '30%',
    marginTop: '100px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }

  const { handleSubmit } = props

  return (
    <div style={ containerStyle }>
      <UserLoginForm onSubmit={ handleSubmit } />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  handleSubmit: (values) => {
    let user = {...values}
    dispatch(userLogin(user.username, user.password))
  }
})

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(Login)
