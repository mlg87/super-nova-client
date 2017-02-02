import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'
import { usersDelete } from 'actions/users'

const RemoveUsers = (props) => {
  const { users, usersSelected, usersDelete } = props

  const removeUsers = () => {
    const usersToRemove = usersSelected.map((index) => {
      return users[index].id
    })
    return usersDelete(usersToRemove)
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

const mapStateToProps = (state, ownProps) => {
  const { users, usersSelected } = state.users

  return {
    users,
    usersSelected
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  usersDelete: (userIds) => {
    dispatch(usersDelete(userIds))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(RemoveUsers)
