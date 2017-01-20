import React from 'react'
import DateSelect from '../components/dateSelect/DateSelect'
import { Center } from '../components/center/Center';
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton';

const ReservationsDateSelect = () => (
  <Center>
    <div className='date-select-wrapper'>
      <DateSelect />

      <Link
        to='/reservations/select-inventory'
        style={{
          float: 'right',
          marginTop: '10px'
        }}
      >
        <RaisedButton
          label='Next'
          primary={true}
        />
      </Link>
    </div>
  </Center>
)

export default ReservationsDateSelect
