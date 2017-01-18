import React from 'react'
import { DateRange } from 'react-date-range'
import moment from 'moment'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  startDate: state.reservationStartDate || moment(),
  endDate: state.reservationEndDate || moment()
})

const mapDispatchToProps = (dispatch) => ({
  // we only get one event - onChange, but we don't know if it was for the
  // start date or end date. So we have to dispatch both. It's fine for now,
  // but if we stick with this calendar we'll probably want to change that. -AD
  dateChange: ({ startDate, endDate }) => {
    dispatch({type: 'SET_RESERVATION_START_DATE', date: startDate})
    dispatch({type: 'SET_RESERVATION_END_DATE', date: endDate})
  }
})


const DateSelect = (props) => {
  const inputStyle = {
    height: '25px',
    width: '45%',
    fontSize: '1rem',
    textAlign: 'center'
  }
  const { endDate, startDate, dateChange } = props
  const format = 'dddd, D MMMM YYYY';
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>
        Choose dates to start a reservation
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around'
        }}
      >
        <input
          type='text'
          readOnly
          value={ startDate && startDate.format(format).toString() }
          style={inputStyle}
        />
        <input
          type='text'
          readOnly
          value={ endDate && endDate.format(format).toString() }
          style={inputStyle}
        />
      </div>
      <DateRange
        startDate={startDate}
        endDate={endDate}
        onInit={ dateChange }
        onChange={ dateChange }
        minDate={ moment() }
        linkedCalendars={true}
      />
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DateSelect)
