import React, { Component } from 'react'
import { DateRange } from 'react-date-range'
import moment from 'moment'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    startDate: state.reservationStartDate || moment(),
    endDate: state.reservationEndDate || moment()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // we only get one event - onChange, but we don't know if it was for the
    // start date or end date. So we have to dispatch both. It's fine for now,
    // but if we stick with this calendar we'll probably want to change that. -AD
    dateChange: ({ startDate, endDate }) => {
      dispatch({type: 'SET_RESERVATION_START_DATE', date: startDate})
      dispatch({type: 'SET_RESERVATION_END_DATE', date: endDate})
    }
  }
}

class DateSelect extends Component {

  render() {
    const { endDate, startDate, dateChange } = this.props
    const format = 'dddd, D MMMM YYYY';
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>
          Choose dates to start a reservation
        </h1>
        <div>
          <input
            type='text'
            readOnly
            value={ startDate && startDate.format(format).toString() }
          />
          <input
            type='text'
            readOnly
            value={ endDate && endDate.format(format).toString() }
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
}

export default DateSelect = connect(
  mapStateToProps,
  mapDispatchToProps
)(DateSelect)
