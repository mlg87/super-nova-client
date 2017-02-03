import * as actions from '../reservations'
import moment from 'moment'

describe('set start date', () => {
  it('should create SET_RESERVATION_START_DATE action', () => {
    const startDate = moment()
    expect(actions.setReservationStartDate(startDate)).toEqual({
      type: 'SET_RESERVATION_START_DATE',
      date: startDate
    })
  })
})

describe('set end date', () => {
  it('should create SET_RESERVATION_END_DATE action', () => {
    const endDate = moment()
    expect(actions.setReservationEndDate(endDate)).toEqual({
      type: 'SET_RESERVATION_END_DATE',
      date: endDate
    })
  })
})

describe('set inventory', () => {
  it('should create SET_INVENTORY action', () => {
    const inventory = ['hi']
    expect(actions.setInventory(inventory)).toEqual({
      type: 'SET_INVENTORY',
      payload: ['hi']
    })
  })
})

describe('add inventory search term', () => {
  it('should create ADD_INVENTORY_SEARCH_TERM action', () => {
    const inventory = 'hi'
    expect(actions.addInventorySearchTerm(inventory)).toEqual({
      type: 'ADD_INVENTORY_SEARCH_TERM',
      payload: 'hi'
    })
  })
})

describe('remove inventory search term', () => {
  it('should create REMOVE_INVENTORY_SEARCH_TERM action', () => {
    const inventory = 'hi'
    expect(actions.removeInventorySearchTerm(inventory)).toEqual({
      type: 'REMOVE_INVENTORY_SEARCH_TERM',
      payload: 'hi'
    })
  })
})

describe('add item to selected inventory', () => {
  it('should create ADD_INVENTORY_TO_RESERVATION action', () => {
    const inventory = {item: 'wow'}
    expect(actions.addInventoryToReservation(inventory)).toEqual({
      type: 'ADD_INVENTORY_TO_RESERVATION',
      payload: inventory
    })
  })
})

describe('remove item from selected inventory', () => {
  it('should create REMOVE_INVENTORY_FROM_RESERVATION action', () => {
    const id = 1
    expect(actions.removeInventoryFromReservation(id)).toEqual({
      type: 'REMOVE_INVENTORY_FROM_RESERVATION',
      payload: id
    })
  })
})

describe('set active selected inventory', () => {
  it('should create SET_ACTIVE_SELECTED_INVENTORY action', () => {
    const id = 1
    expect(actions.setActiveSelectedInventory(id)).toEqual({
      type: 'SET_ACTIVE_SELECTED_INVENTORY',
      payload: id
    })
  })
})

describe('set reservation customers', () => {
  it('should create SET_RESERVATION_CUSTOMERS action', () => {
    const customers = [{name: 'msmeeves'}]
    expect(actions.setReservationCustomers(customers)).toEqual({
      type: 'SET_RESERVATION_CUSTOMERS',
      payload: customers
    })
  })
})

describe('select reservation customer', () => {
  it('should create SELECT_RESERVATION_CUSTOMERS action', () => {
    const customer = {name: 'msmeeves'}
    expect(actions.selectReservationCustomer(customer)).toEqual({
      type: 'SELECT_RESERVATION_CUSTOMER',
      payload: customer
    })
  })
})

describe('set categories', () => {
  it('should create SET_CATEGORIES action', () => {
    const customer = {name: 'msmeeves'}
    expect(actions.setCategories()).toEqual({
      type: 'SET_CATEGORIES'
    })
  })
})

describe('filter by category', () => {
  it('should create SET_SELECTED_CATEGORY_ID action', () => {
    const category = 1
    expect(actions.setSelectedCategoryId(category)).toEqual({
      type: 'SET_SELECTED_CATEGORY_ID',
      payload: category
    })
  })
})
