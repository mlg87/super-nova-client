import React from 'react'
import DateSelect from 'components/DateSelect'
import Center from 'components/Center';
import ReservationNav from 'components/ReservationNav'

const ReservationDateSelect = () => (
  <Center>
    <div className='date-select-wrapper'>
      <DateSelect />

      <ReservationNav
        next='/reservations/select-inventory'
      />
    </div>
  </Center>
)

export default ReservationDateSelect
