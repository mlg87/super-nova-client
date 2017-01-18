import { combineReducers } from 'redux'
import { reservationStartDate, reservationEndDate } from 'reducers/reservations'
import { userLoggedIn } from 'reducers/userLoggedIn'

export const reducers = combineReducers({
  reservationStartDate,
  reservationEndDate,
  userLoggedIn
})
