import React from 'react'
import { Field } from 'redux-form'
import { SelectField } from 'redux-form-material-ui'
import MenuItem from 'material-ui/MenuItem'
import { colors } from 'config/colors'

const SelectInput = (props) => {

  const style_floatingLabelShrink = {
    color: colors.blue
  }

  const style_underlineFocus = {
    borderColor: colors.blue
  }

  return <Field
    name={ props.name }
    component={ SelectField }
    floatingLabelText={ props.name }
    floatingLabelShrinkStyle={ style_floatingLabelShrink }
    underlineFocusStyle={ style_underlineFocus }
    fullWidth={ true }
    onChange={ props.onChange }
    >
    {props.items.map((item) => {
      return <MenuItem
        key={item.id}
        value={item.id}
        primaryText={item[props.textKey]}
      />
    })}
  </Field>
}

export default SelectInput
