import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { colors } from 'config/colors'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import FlatButton from 'material-ui/FlatButton'
import Add from 'material-ui/svg-icons/content/add'
import Clear from 'material-ui/svg-icons/content/clear'
import moment from 'moment'
import { customersGet, customersUpdateSelected } from 'actions/customers'

class CustomersLayout extends Component {
  // get the customers to populate the table
  componentWillMount() {
    const { customersGet } = this.props
    customersGet()
  }

  renderCustomerRows() {
    const { customers, customersSelected } = this.props

    const style_tableRow = {
      cursor: 'pointer',
      color: colors.nav.inactiveText
    }

    return customers.map((customer, i) => {
      const formattedAge = moment().diff(moment(customer.birth_date), 'years')
      const formattedPhone = customer.phone_number.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")

      return (
        <TableRow
          key={ customer.id }
          style={ style_tableRow }
          selected={ customersSelected.indexOf(i) !== -1}
        >
          <TableRowColumn>{ customer.last_name }</TableRowColumn>
          <TableRowColumn>{ customer.first_name }</TableRowColumn>
          <TableRowColumn>{ customer.email }</TableRowColumn>
          <TableRowColumn>{ customer.address }</TableRowColumn>
          <TableRowColumn>{ formattedPhone }</TableRowColumn>
          <TableRowColumn>{ formattedAge }</TableRowColumn>
        </TableRow>
      )
    })
  }

  render() {
    const { children, customersUpdateSelected, customersSelected } = this.props

    const renderSubNavLinks = () => {
      let links = [
        {
          path: '/customers/add',
          text: 'ADD',
          icon: () => <Add color={ colors.nav.inactiveText } />
        }
      ]

      if (customersSelected.length > 0) {
        links.push({
          path: '/customers/remove',
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
        <Table multiSelectable={ true } onRowSelection={ customersUpdateSelected }>
          <TableHeader displaySelectAll={ false } adjustForCheckbox={ false } style={{ backgroundColor: colors.table.header }}>
            <TableRow>
              <TableHeaderColumn>LAST NAME</TableHeaderColumn>
              <TableHeaderColumn>FIRST NAME</TableHeaderColumn>
              <TableHeaderColumn>EMAIL</TableHeaderColumn>
              <TableHeaderColumn>ADDRESS</TableHeaderColumn>
              <TableHeaderColumn>PHONE</TableHeaderColumn>
              <TableHeaderColumn>AGE</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody deselectOnClickaway={ false } displayRowCheckbox={ false }>
            { this.renderCustomerRows() }
          </TableBody>
        </Table>
        { children }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { customers, customersSelected } = state.customers
  return {
    customers,
    customersSelected
  }
}

const mapDispatchToProps = dispatch => ({
  customersGet: () => {
    return dispatch(customersGet())
  },
  customersUpdateSelected: (selectedRows) => {
    return dispatch(customersUpdateSelected(selectedRows))
  }
})

export default CustomersLayout = connect(mapStateToProps, mapDispatchToProps)(CustomersLayout)
