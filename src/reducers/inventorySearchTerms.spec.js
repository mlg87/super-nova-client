import deepFreeze from 'deepFreeze'
import { inventorySearchTerms } from './inventorySearchTerms'

describe('inventory search terms reducer', () => {
  it('should handle initial state', () => {
    expect(
      inventorySearchTerms(undefined, {})
    ).toEqual([])
  })

  it('should add an initial search term', () => {
    const action = {
      type: 'ADD_INVENTORY_SEARCH_TERM',
      payload: 'one'
    }

    expect(
      inventorySearchTerms(undefined, action)
    ).toEqual(['one'])
  })

  it('should add a search term to the existing array', () => {
    const state = ['sup']
    const action = {
      type: 'ADD_INVENTORY_SEARCH_TERM',
      payload: 'doggy?'
    }
    deepFreeze(state)
    expect(
      inventorySearchTerms(state,  action)
    ).toEqual(['sup', 'doggy?'])

  })

  it('should remove a search term', () => {
    const state = ['sup', 'baby', 'mama?']
    const action = {
      type: 'REMOVE_INVENTORY_SEARCH_TERM',
      payload: 'baby'
    }
    deepFreeze(state)
    expect(
      inventorySearchTerms(state,  action)
    ).toEqual(['sup', 'mama?'])

  })


  it('should return current state on default', () => {
    const action = {
      type: 'OTHER_ACTION',
      payload: ['dude']
    }
    expect(
      inventorySearchTerms(['chick'], action)
    ).toEqual(['chick'])
  })
})
