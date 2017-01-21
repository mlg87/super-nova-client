import React from 'react'
import { Field, Fields, reduxForm } from 'redux-form'
// button does not need to be from redux to work with form
import RaisedButton from 'material-ui/RaisedButton'
// make sure to use the TextField from the redux material-ui
import { TextField } from 'redux-form-material-ui'
import { colors } from 'config/colors'

const UserRegisterForm = (props) => {
  const { handleSubmit, reset, submitting, fields, valid } = props

  // validation functions
  const required = value => value == null ? 'Required' : undefined
  const passwordsMatch = (value, allValues) => {
    // only look to validate if both fields have values
    if (!!allValues.password && !!allValues.password_confirm) {
      return allValues.password === allValues.password_confirm ? undefined : 'Passwords must match'
     }
  }

  // TODO get this to work with redux material-ui
  const style_floatingLabelShrink = {
    color: colors.blue
  }
  // TODO get this to work with redux material-ui
  const style_underlineFocus = {
    borderColor: colors.blue
  }

  const style_submit = {
    marginTop: '20px',
  }

  return (
    <form onSubmit={ handleSubmit } style={{minWidth: '100%'}}>
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
      <div>
        <Field
          name='password_confirm'
          component={ TextField }
          floatingLabelText='confirm password'
          floatingLabelShrinkStyle={ style_floatingLabelShrink }
          underlineFocusStyle={ style_underlineFocus }
          fullWidth={ true }
          validate={[ required, passwordsMatch ]}
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
  form: 'userRegisterForm'
})(UserRegisterForm)
