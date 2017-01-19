import React from 'react'
import DateSelect from '../components/dateSelect/DateSelect'
import { Center } from '../components/center/Center';

export const ReservationsDateSelect = () => (
  <Center>
    <DateSelect nextStage='/reservations/select-inventory'/>
  </Center>
)
