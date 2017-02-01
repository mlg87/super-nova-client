import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import ReservationFooter from 'components/ReservationFooter'

const mapStateToProps = (state) => ({
  startDate: state.reservationStartDate,
  endDate: state.reservationEndDate,
  inventory: state.reservationSelectedInventory,
  customer: state.reservationSelectedCustomer,
  currentPath: state.routing.locationBeforeTransitions.pathname
})

const mapDispatchToProps = (dispatch) => ({
  checkState: ({startDate, endDate, inventory, customer, currentPath}) => {
    if (!startDate || !endDate) {
      if (currentPath === '/reservations/select-date') return
      dispatch(push('/reservations/select-date'))
    } else if (!inventory.length) {
      if (currentPath === '/reservations/select-inventory') return
      dispatch(push('/select-inventory'))
    } else if (!customer.id) {
      if (currentPath === '/reservations/select-customer') return
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
      <div style={{height: 'calc(100% - 45px)'}}>
        {this.props.children}
        <ReservationFooter/>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reservation)
