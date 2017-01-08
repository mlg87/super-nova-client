import React, { Component } from 'react'
// components
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
// appearance
import Radium from 'radium'
import { colors } from '../colors'

export class FullPageForm extends Component {
  renderInputs() {
    const floatingLabelShrinkStyle = {
      color: colors.blue
    }

    const underlineFocusStyle = {
      borderColor: colors.blue
    }

    return this.props.inputs.map((input) => {
      return (
        <TextField
          onChange={ input.onChange }
          value={ input.value }
          type={ input.type }
          floatingLabelText={ input.placeholder }
          floatingLabelShrinkStyle={ floatingLabelShrinkStyle }
          underlineFocusStyle={ underlineFocusStyle }
          fullWidth={ true }
        />
      )
    })
  }

  submitForm() {
    console.log('running submit form');
    this.props.onSubmit()
  }

  render() {
    const submitStyle = {
      marginTop: '20px',
    }

    return (
      <div>
        <h1>{ this.props.header }</h1>
        <form>
          { this.renderInputs() }
          <div>
            <RaisedButton
              label='Submit'
              style={ submitStyle }
              fullWidth={ true }
              onClick={ this.submitForm.bind(this) }
            />
          </div>
        </form>
      </div>
    )
  }
}

FullPageForm = Radium(FullPageForm)