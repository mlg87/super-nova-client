import { inventory } from '../inventory'

describe('inventory reducer', () => {
  it('should handle initial state', () => {
    expect(
      inventory(undefined, {})
    ).toEqual([])
  })

  it('should set inventory', () => {
    const action = {
      type: 'SET_INVENTORY',
      payload: ['hello']
    }

    expect(
      inventory(undefined, {...action})
    ).toEqual(['hello'])

    expect(
      inventory(['hi'],  {...action})
    ).toEqual(['hello'])
  })

  it('should return current state on default', () => {
    const action = {
      type: 'OTHER_ACTION',
      payload: ['dude']
    }
    expect(
      inventory(['chick'], action)
    ).toEqual(['chick'])
  })
})
