import React, { Component } from 'react'
import { connect } from 'react-redux'
import { usersGetApiCall, usersGetError } from 'actions/users'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import moment from 'moment'
import { usersUpdateSelected } from 'actions/users'


// import UserRow from 'components/users/UserRow'

class UsersLayout extends Component {
  componentWillMount() {
    this.props.usersGetApiCall('mason')
  }

  renderUserRows(users) {
    return users.map((user) => {
      return (
        <TableRow key={ user.username } style={{cursor: 'pointer'}}>
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
    users: state.usersApiRes
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    usersGetApiCall: (query) => {
      return dispatch(usersGetApiCall(query))
    },
    // NOTE: this Table seems to change its behavior with the wind
    usersUpdateSelected: (selectedRows) => {
      return dispatch(usersUpdateSelected(selectedRows))
    }
  }
}

export default UsersLayout = connect(mapStateToProps, mapDispatchToProps)(UsersLayout)
