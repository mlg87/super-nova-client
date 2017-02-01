import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadUsers } from 'actions/users'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import moment from 'moment'
import { usersUpdateSelected, loadUserTest } from 'actions/users'


const loadDataTest = ({ userId, loadUserTest }) => {
  // arr is requiredFields  [ 'id' ]
  loadUserTest(userId)
}

class UsersLayout extends Component {
  componentWillMount() {
    const { loadUsers } = this.props
    loadUsers()
    loadDataTest(this.props)
  }

  renderUserRows(users) {
    const { userId, usersSelected } = this.props

    const style_cursor = (id) => ({
      cursor: id !== userId ? 'pointer' : 'not-allowed'
    })

    return users.map((user, i) => {
      return (
        <TableRow
          key={ user.username }
          style={ style_cursor(user.id) }
          selectable={ user.id !== userId}
          selected={ usersSelected.indexOf(i) !== -1}
        >
          <TableRowColumn>{ user.username }</TableRowColumn>
          <TableRowColumn>{ `${moment(user.created_at).format('MM/DD/YYYY')}` }</TableRowColumn>
        </TableRow>
      )
    })
  }

  render() {
    const { children, users, usersUpdateSelected } = this.props

    return (
      <div>
        <Table multiSelectable={ true } onRowSelection={ usersUpdateSelected }>
          <TableHeader displaySelectAll={ false } adjustForCheckbox={ false }>
            <TableRow>
              <TableHeaderColumn>USERNAME</TableHeaderColumn>
              <TableHeaderColumn>CREATED</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody deselectOnClickaway={ false } displayRowCheckbox={ false }>
            { this.renderUserRows(users) }
          </TableBody>
        </Table>
        { children }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.usersApiRes,
    userId: state.userId,
    usersSelected: state.usersSelected
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadUsers: () => {
      return dispatch(loadUsers())
    },
    loadUserTest: (id) => {
      return dispatch(loadUserTest(id))
    },
    // NOTE: this Table seems to change its behavior with the wind
    usersUpdateSelected: (selectedRows) => {
      return dispatch(usersUpdateSelected(selectedRows))
    }
  }
}

export default UsersLayout = connect(mapStateToProps, mapDispatchToProps)(UsersLayout)
