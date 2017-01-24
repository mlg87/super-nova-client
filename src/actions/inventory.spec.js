import * as actions from './inventory'

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
  it('should create SELECT_INVENTORY_FOR_RESERVATION action', () => {
    const inventory = {item: 'wow'}
    expect(actions.addInventoryToReservation(inventory)).toEqual({
      type: 'ADD_INVENTORY_TO_RESERVATION',
      payload: inventory
    })
  })
})
