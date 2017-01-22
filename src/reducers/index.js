import { combineReducers } from 'redux'
import { reservationStartDate, reservationEndDate } from 'reducers/reservations'
import { userId } from 'reducers/userId'
import { isLoading } from 'reducers/isLoading'
import { inventory } from 'reducers/inventory'

export const reducers = combineReducers({
  reservationStartDate,
  reservationEndDate,
  userId,
  isLoading,
  inventory
})
