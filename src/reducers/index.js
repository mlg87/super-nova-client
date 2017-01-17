import { combineReducers } from 'redux'
import { reservationStartDate, reservationEndDate } from 'reducers/reservations'
import users from 'reducers/users'

export const reducers = combineReducers({
  reservationStartDate,
  reservationEndDate,
  users
})
