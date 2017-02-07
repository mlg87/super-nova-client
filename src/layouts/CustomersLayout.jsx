import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import FlatButton from 'material-ui/FlatButton'
import Add from 'material-ui/svg-icons/content/add'
import Clear from 'material-ui/svg-icons/content/clear'
import moment from 'moment'
import { customersGet } from 'actions/customers'

class CustomersLayout extends Component {
  // get the customers to populate the table
  componentWillMount() {
    const { customersGet } = this.props
    customersGet()
  }

  render() {
    return (
      <div>
        Sup ladies
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  customersGet: () => {
    return dispatch(customersGet())
  }
})

export default CustomersLayout = connect(null, mapDispatchToProps)(CustomersLayout)
