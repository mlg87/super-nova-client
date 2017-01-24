import React, { Component } from 'react'
import { connect } from 'react-redux'
import { usersGetApiCall, usersGetError } from 'actions/users'

class UsersLayout extends Component {
  componentWillMount() {
    this.props.usersGetApiCall('mason')
  }

  render() {
    const { children, users } = this.props

    return (
      <div>
        <ul>
          { users.map((user) => <li>{user.username}</li>)}
        </ul>
        { children }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.usersApiSuccess
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log('dispatch', dispatch);
  return {
    usersGetApiCall: (query) => {
      console.log('query', query);
      return dispatch(usersGetApiCall(query))
    }
  }
}

export default UsersLayout = connect(mapStateToProps, mapDispatchToProps)(UsersLayout)
