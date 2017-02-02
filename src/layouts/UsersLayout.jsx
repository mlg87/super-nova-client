import React, { Component } from 'react'
import { connect } from 'react-redux'
import { usersGet } from 'actions/users'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import moment from 'moment'
import { usersUpdateSelected } from 'actions/users'

class UsersLayout extends Component {
  componentWillMount() {
    const { usersGet } = this.props
    usersGet()
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
  const { userId } = state
  const { users, usersSelected } = state.users

  return {
    users,
    userId,
    usersSelected
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    usersGet: () => {
      return dispatch(usersGet())
    },
    // NOTE: this Table seems to change its behavior with the wind
    usersUpdateSelected: (selectedRows) => {
      return dispatch(usersUpdateSelected(selectedRows))
    }
  }
}

export default UsersLayout = connect(mapStateToProps, mapDispatchToProps)(UsersLayout)
