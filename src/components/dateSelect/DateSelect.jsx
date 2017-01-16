import React, { Component } from 'react'
import { DateRange } from 'react-date-range'
import moment from 'moment'

export class DateSelect extends Component {

  render() {
    const { endDate, startDate } = this.props
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
          startDate={() => moment()}
          endDate={() => moment()}
          onInit={ this.props.dateChange }
          onChange={ this.props.dateChange }
          linkedCalendars={true}
        />
      </div>
    )
  }
}
