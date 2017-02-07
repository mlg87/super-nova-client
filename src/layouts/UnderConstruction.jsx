import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'

const UnderConstructionDialog = (props) => {
  const { goBack } = props

  const actions = [
    <RaisedButton
      label='Close'
      onClick={ goBack }
    />
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

const mapStateToProps = (state, ownProps) => {
  const { goBack } = ownProps.router
  return {
    goBack
  }
}

export default connect(mapStateToProps, null)(UnderConstructionDialog)
