import { combineReducers } from 'redux'
import { reservationStartDate, reservationEndDate } from 'reducers/reservations'
import { userApiFetch, userApiSuccess, userApiError } from 'reducers/users'
import { reducer as formReducer } from 'redux-form'


export const reducers = combineReducers({
  form: formReducer,
  reservationStartDate,
  reservationEndDate,
  userApiFetch,
  userApiSuccess,
  userApiError
})
