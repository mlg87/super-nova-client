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
        <TableRow key={ user.username }>
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
        <Table multiSelectable={ true } onRowSelection={ usersUpdateSelected.bind(this) }>
          <TableHeader displaySelectAll={ false }>
            <TableRow>
              <TableHeaderColumn>USERNAME</TableHeaderColumn>
              <TableHeaderColumn>CREATED</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody deselectOnClickaway={ false }>
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
    users: state.usersApiSuccess
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    usersGetApiCall: (query) => {
      return dispatch(usersGetApiCall(query))
    },
    usersUpdateSelected: (selectedRow) => {
      console.log('what is selectedRow', selectedRow);
      const i = selectedRow[0]
      return dispatch(usersUpdateSelected(i))
    }
  }
}

export default UsersLayout = connect(mapStateToProps, mapDispatchToProps)(UsersLayout)
