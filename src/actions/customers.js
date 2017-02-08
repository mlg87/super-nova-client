import { push } from 'react-router-redux'
import { CALL_API } from 'middleware/api'

///////////////////////////////////////////////////////////////////////
// works with the customers table and stores those that are selected
export const CUSTOMERS_UPDATE_SELECTED = 'CUSTOMERS_UPDATE_SELECTED'

export const customersUpdateSelected = (indexes) => ({
  type: CUSTOMERS_UPDATE_SELECTED,
  indexes
})
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
// works with the customers table and filters what is displayed
export const CUSTOMERS_FILTER_TABLE = 'CUSTOMERS_FILTER_TABLE'

export const customersFilterTable = (searchTerm) => ({
  type: CUSTOMERS_FILTER_TABLE,
  searchTerm
})
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
// GET - all customers
export const CUSTOMERS_GET_REQUEST = 'CUSTOMERS_GET_REQUEST'
export const CUSTOMERS_GET_SUCCESS = 'CUSTOMERS_GET_SUCCESS'
export const CUSTOMERS_GET_FAILURE = 'CUSTOMERS_GET_FAILURE'

// fetches all customers for a given client
const fetchCustomersGet = () => ({
  [CALL_API]: {
    types: [ CUSTOMERS_GET_REQUEST, CUSTOMERS_GET_SUCCESS, CUSTOMERS_GET_FAILURE ],
    endpoint: 'customers',
    method: 'get'
  }
})

export const customersGet = () => dispatch => {
  return dispatch(fetchCustomersGet())
}
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
// POST - create a single customer
export const CUSTOMER_POST_REQUEST = 'CUSTOMER_POST_REQUEST'
export const CUSTOMER_POST_SUCCESS = 'CUSTOMER_POST_SUCCESS'
export const CUSTOMER_POST_FAILURE = 'CUSTOMER_POST_FAILURE'

const fetchCustomerPost = customer => ({
  [CALL_API]: {
    types: [ CUSTOMER_POST_REQUEST, CUSTOMER_POST_SUCCESS, CUSTOMER_POST_FAILURE ],
    endpoint: 'customers',
    method: 'post',
    body: JSON.stringify({customer})
  }
})

export const customerAdd = customer => dispatch => {
  console.log('customer', customer);
  return
}
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
// this obj is exported so the import looks cleaner in the config reducer
export const customersConfigTypes = {
  errorTypes: [
    CUSTOMERS_GET_FAILURE
  ]
}
///////////////////////////////////////////////////////////////////////
