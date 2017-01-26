import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'
import { usersDeleteApiCall } from 'actions/users'

const RemoveUsers = (props) => {
  const { usersSelected, usersDeleteApiCall } = props

  const removeUsers = () => {
    return usersDeleteApiCall(usersSelected)
  }

  const actions = [
    <Link to='/users'>
      <RaisedButton
        label='Cancel'
        style={{ marginRight: '10px' }}
      />
    </Link>,
    <RaisedButton
      label='Submit'
      onTouchTap={ removeUsers }
    />
  ]

  const isMulti = usersSelected.length > 1

  return (
    <div>
      <Dialog
        open={ true }
        title={`Remove user${ isMulti ? 's' : ''}`}
        actions={ actions }
      >
      <p>Are you sure you would like to remove { isMulti ? 'these users' : 'this user'}? This cannot be undone.</p>
      </Dialog>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  usersSelected: state.usersSelected
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  usersDeleteApiCall: (userIds) => {
    dispatch(usersDeleteApiCall(userIds))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(RemoveUsers)
