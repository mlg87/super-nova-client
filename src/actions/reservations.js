import fetch from 'isomorphic-fetch'
import { handleFetchErrors } from 'lib/helpers'
import { inventoryGet } from './inventory'

export const setReservationStartDate = (startDate) => ({
  type: 'SET_RESERVATION_START_DATE',
  date: startDate
})

export const setReservationEndDate = (endDate) => ({
  type: 'SET_RESERVATION_END_DATE',
  date: endDate
})

export const selectReservationCustomer = (customer) => ({
  type: 'SELECT_RESERVATION_CUSTOMER',
  payload: customer
})

export const setReservationCustomers = (customers) => ({
  type: 'SET_RESERVATION_CUSTOMERS',
  payload: customers
})

export const setInventory = (inventory) => ({
  type: 'SET_INVENTORY',
  payload: inventory
})

export const addInventoryToReservation = (item) => ({
  type: 'ADD_INVENTORY_TO_RESERVATION',
  payload: item
})

export const removeInventoryFromReservation = (item_id) => ({
  type: 'REMOVE_INVENTORY_FROM_RESERVATION',
  payload: item_id
})

export const setActiveSelectedInventory = (item_id) => ({
  type: 'SET_ACTIVE_SELECTED_INVENTORY',
  payload: item_id
})

export const addInventorySearchTerm = (searchTerm) => ({
  type: 'ADD_INVENTORY_SEARCH_TERM',
  payload: searchTerm
})

export const removeInventorySearchTerm = (searchTerm) => ({
  type: 'REMOVE_INVENTORY_SEARCH_TERM',
  payload: searchTerm
})

export const setCategories = (categories) => ({
  type: 'SET_CATEGORIES',
  payload: categories
})

export const setSelectedCategoryId = (categoryId) => ({
  type: 'SET_SELECTED_CATEGORY_ID',
  payload: categoryId
})

export const fetchCustomers = (search_term) => dispatch => {
  fetch('/api/customers/search', {
    method: 'get',
    headers: { search_term }
  })
  .then(handleFetchErrors)
  .then((res) => {
    res.json().then(json => {
      dispatch(setReservationCustomers(json))
    })
  })
  .catch((err) => {console.log('fetch err:', err);})
}

export const filterByCategory = (categoryId) => (dispatch, getState) => {
  const { inventorySearchTerms } = getState()
  dispatch(setSelectedCategoryId(categoryId))
  inventoryGet(inventorySearchTerms, categoryId)(dispatch)
}

export const updateSearchTerms = (action, searchTerm) => (dispatch, getState) => {
  if (action === 'add') {
    dispatch(addInventorySearchTerm(searchTerm))
  } else {
    dispatch(removeInventorySearchTerm(searchTerm))
  }
  const { inventorySearchTerms, selectedCategoryId } = getState()
  inventoryGet(inventorySearchTerms, selectedCategoryId)(dispatch)
}
