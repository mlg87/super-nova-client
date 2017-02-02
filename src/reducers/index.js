import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reservationStartDate, reservationEndDate } from 'reducers/reservations'
import usersReducer from 'reducers/users'
import { reducer as formReducer } from 'redux-form'
import { userId } from 'reducers/userId'
import { isLoading } from 'reducers/isLoading'
import { inventory } from 'reducers/inventory'
import { inventorySearchTerms } from 'reducers/inventorySearchTerms'
import { reservationSelectedInventory } from 'reducers/reservationSelectedInventory'
import { reservationSelectedCustomer } from 'reducers/reservationSelectedCustomer'
import { reservationCustomers } from 'reducers/reservationCustomers'

export const reducers = combineReducers({
  form: formReducer,
  routing: routerReducer,
  reservationStartDate,
  reservationEndDate,
  userId,
  usersReducer,
  isLoading,
  inventory,
  inventorySearchTerms,
  reservationSelectedInventory,
  reservationCustomers,
  reservationSelectedCustomer
})
