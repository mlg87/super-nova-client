import { inventoryCategories } from '../inventoryCategories'

describe('inventory categories reducer', () => {
  it('should handle initial state', () => {
    expect(
      inventoryCategories(undefined, {})
    ).toEqual([])
  })

  it('should set inventory Categories', () => {
    const action = {
      type: 'SET_CATEGORIES',
      payload: ['hello']
    }

    expect(
      inventoryCategories(undefined, {...action})
    ).toEqual(['hello'])

    expect(
      inventoryCategories(['hi'],  {...action})
    ).toEqual(['hello'])
  })

  it('should return current state on default', () => {
    const action = {
      type: 'OTHER_ACTION',
      payload: ['dude']
    }
    expect(
      inventoryCategories(['chick'], action)
    ).toEqual(['chick'])
  })
})
