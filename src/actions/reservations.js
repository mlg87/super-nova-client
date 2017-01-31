import fetch from 'isomorphic-fetch'
import { handleFetchErrors } from 'lib/helpers'

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

export const removeInventoryFromReservation = (uuid) => ({
  type: 'REMOVE_INVENTORY_FROM_RESERVATION',
  payload: uuid
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

export const setSelectedCategory = (categoryId) => ({
  type: 'SET_SELECTED_CATEGORY',
  payload: categoryId
})

export const fetchInventory = (search_terms, category) => dispatch => {
  fetch('/api/inventory/search', {
    method: 'get',
    headers: { search_terms, category }
  })
  .then(handleFetchErrors)
  .then((res) => {
    res.json().then(json => {
      dispatch(setInventory(json))
    })
  })
  .catch((err) => {console.log('fetch err:', err);})
}

export const fetchCategories = () => dispatch => {
  const token = localStorage.getItem('token')
  fetch('/api/categories', {
    method: 'get',
    headers: {
      'Authorization': 'Bearer ' + token
    }
  })
  .then(handleFetchErrors)
  .then((res) => {
    res.json().then(json => {
      dispatch(setCategories(json.data))
    })
  })
  .catch((err) => {console.log('fetch err:', err);})
}

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

export const filterByCategory = (action, categoryId) => (dispatch, getState) => {
  const { inventorySearchTerms } = getState()
  dispatch(setSelectedCategory(categoryId))
  fetchInventory(inventorySearchTerms, categoryId)(dispatch)
}

export const updateSearchTerms = (action, searchTerm) => (dispatch, getState) => {
  if (action === 'add') {
    dispatch(addInventorySearchTerm(searchTerm))
  } else {
    dispatch(removeInventorySearchTerm(searchTerm))
  }
  const { inventorySearchTerms, selectedCategory } = getState()
  fetchInventory(inventorySearchTerms, selectedCategory)(dispatch)
}
