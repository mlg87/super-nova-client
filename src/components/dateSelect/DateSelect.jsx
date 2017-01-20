import React from 'react'
import { DateRange } from 'react-date-range'
import moment from 'moment'
import { connect } from 'react-redux'
import { setStartDate, setEndDate } from 'actions'

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
    dispatch(setStartDate(startDate))
    dispatch(setEndDate(endDate))
  }
})

const getInputValue = (date) => {
  const format = 'dddd, D MMMM YYYY';
  if (!date) return ''
  if (!moment.isMoment(date)) {
    throw new Error('date selected must be a moment')
  }
  return date.format(format).toString()
}

// named export for testing
export const DateSelect = (props) => {
  const inputStyle = {
    height: '25px',
    width: '45%',
    fontSize: '1rem',
    textAlign: 'center'
  }
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
      <div className='input-container'
        style={{
          display: 'flex',
          justifyContent: 'space-around'
        }}
      >
        <input className='start-date-display'
          type='text'
          readOnly
          value={ getInputValue(startDate) }
          style={inputStyle}
        />
      <input className='end-date-display'
          type='text'
          readOnly
          value={ getInputValue(endDate) }
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
