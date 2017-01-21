import { combineReducers } from 'redux'
import { reservationStartDate, reservationEndDate } from 'reducers/reservations'
import { userRegisterFetch, userRegisterSuccess, userRegisterError } from 'reducers/users'
import { reducer as formReducer } from 'redux-form'


export const reducers = combineReducers({
  form: formReducer,
  reservationStartDate,
  reservationEndDate,
  userRegisterFetch,
  userRegisterSuccess,
  userRegisterError
})
