import React from 'react'
import { Field, reduxForm } from 'redux-form'
// button does not need to be from redux to work with form
import RaisedButton from 'material-ui/RaisedButton'
// make sure to use the TextField from the redux material-ui
import { TextField } from 'redux-form-material-ui'
import { colors } from 'config/colors'

const UserLoginForm = (props) => {
  const { handleSubmit, reset, submitting, fields, valid } = props

  // validation functions
  const required = value => value == null ? 'Required' : undefined

  const style_floatingLabelShrink = {
    color: colors.blue
  }

  const style_underlineFocus = {
    borderColor: colors.blue
  }

  const style_submit = {
    marginTop: '20px',
  }

  return (
    <form onSubmit={ handleSubmit } style={{minWidth: '100%'}}>
      <h1>Login</h1>
      <div>
        <Field
          name='username'
          component={ TextField }
          floatingLabelText='username'
          floatingLabelShrinkStyle={ style_floatingLabelShrink }
          underlineFocusStyle={ style_underlineFocus }
          fullWidth={ true }
          validate={[ required ]}
        />
      </div>
      <div>
        <Field
          name='password'
          component={ TextField }
          floatingLabelText='password'
          floatingLabelShrinkStyle={ style_floatingLabelShrink }
          underlineFocusStyle={ style_underlineFocus }
          fullWidth={ true }
          validate={[ required ]}
          type='password'
        />
      </div>
      <RaisedButton
        label='Submit'
        style={ style_submit }
        fullWidth={ true }
        type='submit'
        disabled={ !valid }
      />
    </form>
  )
}

export default reduxForm({
  form: 'userLoginForm'
})(UserLoginForm)
