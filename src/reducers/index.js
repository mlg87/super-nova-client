import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reservationStartDate, reservationEndDate } from 'reducers/reservations'
import { userApiFetch, userApiSuccess, userApiError } from 'reducers/users'
import { reducer as formReducer } from 'redux-form'
import { userId } from 'reducers/userId'
import { isLoading } from 'reducers/isLoading'

export const reducers = combineReducers({
  form: formReducer,
  routing: routerReducer,
  reservationStartDate,
  reservationEndDate,
  userApiFetch,
  userApiSuccess,
  userApiError,
  userId,
  isLoading
})
