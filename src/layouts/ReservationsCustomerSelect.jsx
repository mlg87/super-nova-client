import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Center } from 'components/center/Center';
import CustomerList from 'components/customerList/CustomerList'
import { fetchCustomers } from 'actions/reservations'
import ReservationNav from 'components/reservationNav/ReservationNav'
import SelectedCustomer from 'components/selectedCustomer/SelectedCustomer'
import CustomerSearch from 'components/customerSearch/CustomerSearch'

const mapDispatchToProps = (dispatch) => ({
  fetchInitialCustomers: () => {
    dispatch(fetchCustomers(''))
  }
})

export class ReservationsCustomerSelect extends Component {
  constructor(props) {
    super(props)
    props.fetchInitialCustomers()
  }

  render() {
    return (
      <div>
        <SelectedCustomer />
        <Center>
          <div>
            <CustomerSearch />

            <CustomerList />

            <ReservationNav
              back='/reservations/select-inventory'
              next='/reservations/review'
            />
          </div>
        </Center>

      </div>
    )
  }
}

export default connect(
  null, mapDispatchToProps
)(ReservationsCustomerSelect)
