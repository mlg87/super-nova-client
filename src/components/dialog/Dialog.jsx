import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import { Link } from 'react-router'

const SampleDialog = (props) => {
  const { returnPath } = props.route

  const actions = [
    <Link to={ returnPath }>
      <FlatButton
        label="Cancel"
        primary={ true }
        keyboardFocused={ true }
        />
    </Link>
  ]

  return (
    <Dialog
      title='Sample title'
      open={ true }
      actions={ actions }
      >
      I'm a sample dialog
    </Dialog>
  )
}

export default SampleDialog
