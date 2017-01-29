import React from 'react'
import { DateRange } from 'react-date-range'
import moment from 'moment'
import { connect } from 'react-redux'
import { setReservationStartDate, setReservationEndDate } from 'actions/reservations'

// export for testing
export const mapStateToProps = (state) => ({
  startDate: state.reservationStartDate || moment(),
  endDate: state.reservationEndDate || moment()
})

// export for testing
export const mapDispatchToProps = (dispatch) => ({
  // we only get one event - onChange, but we don't know if it was for the
  // start date or end date. So we have to dispatch both. It's fine for now,
  // but if we stick with this calendar we'll probably want to change that. -AD
  dateChange: ({ startDate, endDate }) => {
    dispatch(setReservationStartDate(startDate))
    dispatch(setReservationEndDate(endDate))
  }
})

// named export for testing
export const DateSelect = (props) => {
  const {
    endDate,
    startDate,
    dateChange
  } = props

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>
        Choose dates to start a reservation
      </h1>
      <DateRange
        startDate={startDate}
        endDate={endDate}
        onInit={ dateChange }
        onChange={ dateChange }
        minDate={ moment() }
        linkedCalendars={true}
        calendars={1}
        style={{textAlign: 'center'}}
      />
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DateSelect)
