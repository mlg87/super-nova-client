import React from 'react'
import { connect } from 'react-redux'
import Center from 'components/Center'
import { format } from 'bin/helpers'
import SelectedInventoryList from 'components/SelectedInventoryList'
import SelectedCustomer from 'components/SelectedCustomer'
import ReservationNav from 'components/ReservationNav'
import fetch from 'isomorphic-fetch'

const mapStateToProps = (state) => ({
  startDate: state.reservationStartDate,
  endDate: state.reservationEndDate,
  inventory: state.reservationSelectedInventory,
  customer: state.reservationSelectedCustomer,
  user_id: state.userId
})

const submitReservation = (payload) => {
  fetch('/api/reservations/add', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(payload)
  })
  .then((res) => res.json())
  .then((json) => {
    console.log(json)
  })
  // throw errs
  .catch((err) => {
    console.log(err)
  })
}

const ReservationReview = (props) => {
  const {
    startDate,
    endDate,
    inventory,
    customer,
    user_id
  } = props
  return (
    <Center>
      <div>
        <p>Dates: {format('date', startDate)} - {format('date', endDate)}</p>
        <SelectedInventoryList />
        <SelectedCustomer />

        <ReservationNav
          back='/reservations/select-customer'
          next={() => submitReservation({
            startDate,
            endDate,
            inventory_ids: inventory.map((item) => item.item_id),
            customer_id: customer.id,
            user_id
          })}
          nextLabel='Submit'
        />

      </div>
    </Center>
  )
}

export default connect(
  mapStateToProps
)(ReservationReview)
