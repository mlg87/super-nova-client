import React from 'react'
import { Link } from 'react-router'
import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'

export const UnderConstruction = () => {
  const containerStyle = {
    width: '60%',
    marginTop: '20px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }

  return (
    <div style={ containerStyle }>
      <h3>This page is currently under construction. Check back soon...</h3>
    </div>
  )
}

export const UnderConstructionDialog = (props) => {
  const actions = [
    <Link to='/users'>
      <RaisedButton
        label='Close'
      />
    </Link>
  ]

  return (
    <Dialog
      open={ true }
      title='Under Construction'
      actions={ actions }
    >
      This feature is currently being built. Check back soon...
    </Dialog>
  )
}
