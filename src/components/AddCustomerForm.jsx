import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router'
// button does not need to be from redux to work with form
import RaisedButton from 'material-ui/RaisedButton'
// make sure to use the TextField from the redux material-ui
import { TextField, SelectField, DatePicker } from 'redux-form-material-ui'
import MenuItem from 'material-ui/MenuItem'
import { colors } from 'config/colors'
import states from 'config/states'

const AddCustomerForm = props => {
  const { handleSubmit, valid, returnPath } = props

  // validation functions
  const required = value => value == null ? 'Required' : undefined
  const email = value => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? undefined : 'Invalid email'
  const phone = value => /^[0-9]{10}/i.test(value) ? undefined : '10 digits please'
  const zip = value => /^[0-9]{5}/i.test(value) ? undefined : '5 digits please'

  // NOTE: probably want to get the customer types from the server too
  const genders = [
    'male',
    'female',
    'both'
  ]

  // NOTE: need to get the customer types from the server

  const style_container = {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: '100%'
  }

  const col = {
    paddingRight: '10px',
    paddingLeft: '10px'
  }

  const style_col = (width) => ({
    ...col,
    width: `${width}%`
  })

  const style_floatingLabelShrink = {
    color: colors.blue
  }

  const style_underlineFocus = {
    borderColor: colors.blue
  }

  const style_buttonContainer = {
    float: 'right',
    marginTop: '20px',
    clear: 'both'
  }

  return (
    <form onSubmit={ handleSubmit }>
      <div style={ style_container }>
        <div style={ style_col(50) }>
          <Field
            name='first_name'
            component={ TextField }
            floatingLabelText='first name'
            floatingLabelShrinkStyle={ style_floatingLabelShrink }
            underlineFocusStyle={ style_underlineFocus }
            fullWidth={ true }
            validate={[ required ]}
            />
        </div>
        <div style={ style_col(50) }>
          <Field
            name='last_name'
            component={ TextField }
            floatingLabelText='last name'
            floatingLabelShrinkStyle={ style_floatingLabelShrink }
            underlineFocusStyle={ style_underlineFocus }
            fullWidth={ true }
            validate={[ required ]}
            />
        </div>
        <div style={ style_col(50) }>
          <Field
            name='email'
            component={ TextField }
            floatingLabelText='email'
            floatingLabelShrinkStyle={ style_floatingLabelShrink }
            underlineFocusStyle={ style_underlineFocus }
            fullWidth={ true }
            validate={[ required, email ]}
            />
        </div>
        <div style={ style_col(50) }>
          <Field
            name='phone_number'
            component={ TextField }
            floatingLabelText='phone number'
            floatingLabelShrinkStyle={ style_floatingLabelShrink }
            underlineFocusStyle={ style_underlineFocus }
            fullWidth={ true }
            validate={[ required, phone ]}
            />
        </div>
        <div style={ style_col(40) }>
          <Field
            name='street'
            component={ TextField }
            floatingLabelText='street'
            floatingLabelShrinkStyle={ style_floatingLabelShrink }
            underlineFocusStyle={ style_underlineFocus }
            fullWidth={ true }
            validate={[ required ]}
            />
        </div>
        <div style={ style_col(20) }>
          <Field
            name='city'
            component={ TextField }
            floatingLabelText='city'
            floatingLabelShrinkStyle={ style_floatingLabelShrink }
            underlineFocusStyle={ style_underlineFocus }
            fullWidth={ true }
            validate={[ required ]}
            />
        </div>
        <div style={ style_col(20) }>
          <Field
            name='state'
            component={ SelectField }
            maxHeight={ 200 }
            floatingLabelText='state'
            floatingLabelShrinkStyle={ style_floatingLabelShrink }
            underlineFocusStyle={ style_underlineFocus }
            fullWidth={ true }
            validate={[ required ]}
            >
            { states.map(state => <MenuItem key={ state } value={ state } primaryText={ state } />) }
          </Field>
        </div>
        <div style={ style_col(20) }>
          <Field
            name='zip'
            component={ TextField }
            floatingLabelText='zip'
            floatingLabelShrinkStyle={ style_floatingLabelShrink }
            underlineFocusStyle={ style_underlineFocus }
            fullWidth={ true }
            validate={[ required, zip ]}
            />
        </div>
        <div style={ style_col(25) }>
          <Field
            name='birth_date'
            component={ DatePicker }
            floatingLabelText='date of birth'
            floatingLabelShrinkStyle={ style_floatingLabelShrink }
            underlineFocusStyle={ style_underlineFocus }
            fullWidth={ true }
            validate={[ required ]}
            />
        </div>
        <div style={ style_col(20) }>
          <Field
            name='gender'
            component={ SelectField }
            maxHeight={ 200 }
            floatingLabelText='gender'
            floatingLabelShrinkStyle={ style_floatingLabelShrink }
            underlineFocusStyle={ style_underlineFocus }
            fullWidth={ true }
            validate={[ required ]}
            >
            { genders.map(gender => <MenuItem key={ gender } value={ gender } primaryText={ gender } />) }
          </Field>
        </div>
        <div style={ style_col(20) }>
          <Field
            name='student_id'
            component={ TextField }
            floatingLabelText='id'
            floatingLabelShrinkStyle={ style_floatingLabelShrink }
            underlineFocusStyle={ style_underlineFocus }
            fullWidth={ true }
            validate={[ required, zip ]}
            />
        </div>
      </div>
      <div style={ style_buttonContainer }>
        <Link to={ returnPath }>
          <RaisedButton
            label='Cancel'
            style={{ marginRight: '10px' }}
            />
        </Link>
        <RaisedButton
          label='Submit'
          type='submit'
          disabled={ !valid }
          />
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'addCustomerForm'
})(AddCustomerForm)
