import React from 'react'
import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/Subheader'
import CustomerDetails from 'components/customerDetails/CustomerDetails'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  customer: state.reservationSelectedCustomer
})

const SelectedCustomer = (props) => {
  const { customer } = props
  if (!Object.keys(customer).length) return null
  return (
    <Paper
      zDepth={1}
      style={{
        padding: '0 16px 16px',
      }}
    >
      <Subheader style={{padding: 0}}>
        Selected Customer
      </Subheader>
      <CustomerDetails
        customer={customer}
      />
    </Paper>
  )
}

export default connect(
  mapStateToProps
)(SelectedCustomer)
