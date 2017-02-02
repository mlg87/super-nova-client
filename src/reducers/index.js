import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { configReducer as config } from 'reducers/config'
import { reservationStartDate, reservationEndDate } from 'reducers/reservations'
import { usersReducer as users } from 'reducers/users'
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
  config,
  reservationStartDate,
  reservationEndDate,
  userId,
  users,
  isLoading,
  inventory,
  inventorySearchTerms,
  reservationSelectedInventory,
  reservationCustomers,
  reservationSelectedCustomer
})
