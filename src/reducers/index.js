import { combineReducers } from 'redux'
import { reservationStartDate, reservationEndDate } from 'reducers/reservations'
import { userId } from 'reducers/userId'
import { isLoading } from 'reducers/isLoading'

export const reducers = combineReducers({
  reservationStartDate,
  reservationEndDate,
  userId,
  isLoading
})
