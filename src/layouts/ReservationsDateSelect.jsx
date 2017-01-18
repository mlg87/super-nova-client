import React from 'react'
import { DateSelect } from '../components/dateSelect/DateSelect'
import { Center } from '../components/center/Center';

export const ReservationsDateSelect = () => (
  // constructor() {
  //   super()
  //   this.state = {
  //     stage: 'dateSelect',
  //     startDate: moment(),
  //     endDate: moment()
  //   }
  // }

  // dateChange({ startDate, endDate }){
  //   this.setState({ startDate, endDate })
  // }

  // generateReservationStage(){
  //   const { endDate, startDate } = this.state
  //   const stages = {
  //     'dateSelect': <DateSelect
  //       startDate={startDate}
  //       endDate={endDate}
  //       dateChange={ this.dateChange.bind(this) }
  //     />
  //   }
  //   return stages[this.state.stage]
  // }

  <Center>
    <DateSelect />
  </Center>
)
