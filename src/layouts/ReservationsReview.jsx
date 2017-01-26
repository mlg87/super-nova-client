import React from 'react'
import { connect } from 'react-redux'
import Center from 'components/center/Center'
import { format } from 'bin/helpers'

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
      <p>Dates: {format('date', startDate)} - {format('date', endDate)}</p>
    </Center>
  )
}

export default connect(
  mapStateToProps
)(ReservationReview)
