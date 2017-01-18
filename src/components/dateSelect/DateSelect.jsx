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
    dateChange: () => {
      dispatch({type: 'SET_RESERVATION_START_DATE', value: new Date()})
      dispatch({type: 'SET_RESERVATION_END_DATE', value: new Date()})
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
