import React from 'react'
import { connect } from 'react-redux'
import Center from 'components/center/Center'
import { format } from 'bin/helpers'
import SelectedInventoryList from 'components/selectedInventoryList/SelectedInventoryList'
import SelectedCustomer from 'components/selectedCustomer/SelectedCustomer'
import ReservationNav from 'components/reservationNav/ReservationNav'
const mapStateToProps = (state) => ({
  startDate: state.reservationStartDate,
  endDate: state.reservationEndDate
})

const ReservationReview = (props) => {
  const {
    startDate,
    endDate
  } = props
  return (
    <Center>
      <div>
        <p>Dates: {format('date', startDate)} - {format('date', endDate)}</p>
        <SelectedInventoryList />
        <SelectedCustomer />

        <ReservationNav
          back='/reservations/select-customer'
          next='/reservations/submit'
          nextLabel='Submit'
        />

      </div>
    </Center>
  )
}

export default connect(
  mapStateToProps
)(ReservationReview)
