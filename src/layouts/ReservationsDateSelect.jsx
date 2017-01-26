import React from 'react'
import DateSelect from '../components/dateSelect/DateSelect'
import Center from '../components/center/Center';
import ReservationNav from 'components/reservationNav/ReservationNav'

const ReservationsDateSelect = () => (
  <Center>
    <div className='date-select-wrapper'>
      <DateSelect />

      <ReservationNav
        next='/reservations/select-inventory'
      />
    </div>
  </Center>
)

export default ReservationsDateSelect
