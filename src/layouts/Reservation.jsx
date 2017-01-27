import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

const mapStateToProps = (state) => ({
  startDate: state.reservationStartDate,
  endDate: state.reservationEndDate,
  inventory: state.reservationSelectedInventory,
  customer: state.reservationSelectedCustomer
})

const checkState = ({startDate, endDate, inventory, customer}) => {
  // if (!startDate || !endDate) {
  //   browserHistory.push('/reservations/select-date')
  // } else if (!inventory.length) {
  //   // Router.transitionTo('/reservations/select-inventory')
  // } else if (!customer.id) {
  //   // Router.transitionTo('/reservations/select-customer')
  // }
}

// all this component does is check if there's a step missing
// in the reservation and redirect if needed
class Reservation extends Component {
  constructor(props) {
    super(props)
    checkState(props)
  }


  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default connect(
  mapStateToProps
)(Reservation)
