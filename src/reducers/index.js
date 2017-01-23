import { combineReducers } from 'redux'
import { reservationStartDate, reservationEndDate } from 'reducers/reservations'
import { userApiFetch, userApiSuccess, userApiError } from 'reducers/users'
import { reducer as formReducer } from 'redux-form'
import { userId } from 'reducers/userId'
import { isLoading } from 'reducers/isLoading'
import { inventory } from 'reducers/inventory'
import { inventorySearchTerms } from 'reducers/inventorySearchTerms'

export const reducers = combineReducers({
  form: formReducer,
  reservationStartDate,
  reservationEndDate,
  userApiFetch,
  userApiSuccess,
  userApiError,
  userId,
  isLoading,
  inventory,
  inventorySearchTerms
})
