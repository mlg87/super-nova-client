import { combineReducers } from 'redux'
import { reservationStartDate, reservationEndDate } from 'reducers/reservations'

export const reducers = combineReducers({
  reservationStartDate,
  reservationEndDate
})
