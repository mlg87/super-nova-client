import fetch from 'isomorphic-fetch'
import { handleFetchErrors } from 'bin/helpers'

export const setInventory = (inventory) => ({type: 'SET_INVENTORY', payload: inventory})

export const addInventoryToReservation = (item) => ({
  type: 'ADD_INVENTORY_TO_RESERVATION',
  payload: item
})

export const addInventorySearchTerm = (searchTerm) => ({
  type: 'ADD_INVENTORY_SEARCH_TERM',
  payload: searchTerm
})
export const removeInventorySearchTerm = (searchTerm) => ({
  type: 'REMOVE_INVENTORY_SEARCH_TERM',
  payload: searchTerm
})

export const fetchInventory = (search_terms) => dispatch => {
  fetch('/api/inventory/search', {
    method: 'get',
    headers: { search_terms }
  })
  .then(handleFetchErrors)
  .then((res) => {
    res.json().then(json => {
      dispatch(setInventory(json))
    })
  })
  .catch((err) => {console.log('fetch err:', err);})
}

export const updateSearchTerms = (action, searchTerm) => (dispatch, getState) => {
  if (action === 'add') {
    dispatch(addInventorySearchTerm(searchTerm))
  } else {
    dispatch(removeInventorySearchTerm(searchTerm))
  }

  fetchInventory(getState().inventorySearchTerms)(dispatch)
}
