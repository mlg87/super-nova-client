import React, { Component } from 'react'
import { connect } from 'react-redux'
import Center from 'components/Center';
import CustomerList from 'components/CustomerList'
import { fetchCustomers } from 'actions/reservations'
import SelectedCustomer from 'components/SelectedCustomer'
import CustomerSearch from 'components/CustomerSearch'

const mapStateToProps = (state) => ({
  selectedCustomer: state.reservationSelectedCustomer
})

const mapDispatchToProps = (dispatch) => ({
  fetchInitialCustomers: () => {
    dispatch(fetchCustomers(''))
  }
})

export class ReservationCustomerSelect extends Component {
  constructor(props) {
    super(props)
    props.fetchInitialCustomers()
  }

  render() {
    return (
      <div>
        <div
          style={{position: 'absolute', top: 0, left: 0}}
        >
          <SelectedCustomer />
        </div>
        <Center>
          <div>
            <CustomerSearch />

            <CustomerList />

          </div>
        </Center>

      </div>
    )
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(ReservationCustomerSelect)
