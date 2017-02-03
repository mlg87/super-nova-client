import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { colors } from 'config/colors'
import { usersGet } from 'actions/users'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import FlatButton from 'material-ui/FlatButton'
import Add from 'material-ui/svg-icons/content/add'
import Clear from 'material-ui/svg-icons/content/clear'
import moment from 'moment'
import { usersUpdateSelected } from 'actions/users'

class UsersLayout extends Component {
  componentWillMount() {
    const { usersGet } = this.props
    usersGet()
  }

  renderUserRows(users) {
    const { userId, usersSelected } = this.props

    const style_tableRow = (id) => ({
      cursor: id !== userId ? 'pointer' : 'not-allowed',
      color: colors.nav.inactiveText
    })

    return users.map((user, i) => {
      return (
        <TableRow
          key={ user.username }
          style={ style_tableRow(user.id) }
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
    const { children, users, usersUpdateSelected, usersSelected } = this.props

    const renderSubNavLinks = () => {
      let links = [
        {
          path: '/users/add',
          text: 'ADD',
          icon: () => <Add color={ colors.nav.inactiveText } />
        }
      ]

      if (usersSelected.length > 0) {
        links.push({
          path: '/users/remove',
          text: 'REMOVE SELECTED',
          icon: () => <Clear color={ colors.nav.inactiveText } />
        })
      }

      const style_button = {
        height: '90%',
        color: colors.nav.inactiveText
      }

      return links.map((link) => {
        return (
          <Link to={ link.path } key={ link.path }>
            <FlatButton
              icon={ link.icon() }
              style={ style_button }
              label={ link.text }
              />
          </Link>
        )
      })
    }

    const style_subNav = {
      height: '60px',
      borderBottom: `1px solid ${colors.nav.linkActiveAndBorder}`,
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '20px',
      paddingRight: '20px'
    }

    return (
      <div>
        <div style={ style_subNav }>
          { renderSubNavLinks() }
        </div>
        <Table multiSelectable={ true } onRowSelection={ usersUpdateSelected }>
          <TableHeader displaySelectAll={ false } adjustForCheckbox={ false } style={{ backgroundColor: colors.table.header }}>
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
