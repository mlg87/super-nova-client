import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reservationStartDate, reservationEndDate } from 'reducers/reservations'
import { userApiFetch, userApiRes, usersApiRes, usersSelected, userLogout } from 'reducers/users'
import { reducer as formReducer } from 'redux-form'
import { userId } from 'reducers/userId'
import { isLoading } from 'reducers/isLoading'

export const reducers = combineReducers({
  form: formReducer,
  routing: routerReducer,
  reservationStartDate,
  reservationEndDate,
  userApiFetch,
  userApiRes,
  usersApiRes,
  usersSelected,
  userLogout,
  userId,
  isLoading
})
