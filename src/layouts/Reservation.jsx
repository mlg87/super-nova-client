import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

const mapStateToProps = (state) => ({
  startDate: state.reservationStartDate,
  endDate: state.reservationEndDate,
  inventory: state.reservationSelectedInventory,
  customer: state.reservationSelectedCustomer
})

const mapDispatchToProps = (dispatch) => ({
  checkState: ({startDate, endDate, inventory, customer}) => {
    if (!startDate || !endDate) {
      dispatch(push('/reservations/select-date'))
    } else if (!inventory.length) {
      dispatch(push('/reservations/select-inventory'))
    } else if (!customer.id) {
      dispatch(push('/reservations/select-customer'))
    }
  }
})

// all this component does is check if there's a step missing
// in the reservation and redirect if needed
class Reservation extends Component {
  componentWillMount() {
    this.props.checkState(this.props)
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
  mapStateToProps,
  mapDispatchToProps
)(Reservation)
