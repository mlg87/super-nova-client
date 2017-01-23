import fetch from 'isomorphic-fetch'
import { handleFetchErrors } from 'bin/helpers'

export const setInventory = (inventory) => ({type: 'SET_INVENTORY', payload: inventory})

export const fetchInventory = (searchTerm) => dispatch => {
  fetch(`/api/inventory/search?searchTerm=${searchTerm}`, {
    method: 'get',
  })
  .then(handleFetchErrors)
  .then((res) => {
    res.json().then(json => {
      dispatch(setInventory(json))
    })
  })
  .catch((err) => {console.log('fetch err:', err);})
}

export const addInventorySearchTerm = (searchTerm) => ({
  type: 'ADD_INVENTORY_SEARCH_TERM',
  payload: searchTerm
})
export const removeInventorySearchTerm = (searchTerm) => ({
  type: 'REMOVE_INVENTORY_SEARCH_TERM',
  payload: searchTerm
})
