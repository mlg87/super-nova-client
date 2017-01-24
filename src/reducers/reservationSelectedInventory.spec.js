import { reservationSelectedInventory } from './reservationSelectedInventory'
import deepFreeze from 'deepFreeze'

describe('reservation selected inventory reducer', () => {
  it('should handle initial state', () => {
    expect(
      reservationSelectedInventory(undefined, {})
    ).toEqual([])
  })

  it('should add inventory item', () => {
    const action = {
      type: 'ADD_INVENTORY_TO_RESERVATION',
      payload: {name: 'hello'}
    }

    expect(
      reservationSelectedInventory(undefined, {...action})
    ).toEqual([{name: 'hello'}])

    const state = [{name: 'hi'}]
    deepFreeze(state)

    expect(
      reservationSelectedInventory(state,  {...action})
    ).toEqual([{name: 'hi'}, {name: 'hello'}])
  })

  it('should return current state on default', () => {
    const action = {
      type: 'OTHER_ACTION',
      payload: [{name: 'hi'}]
    }
    expect(
      reservationSelectedInventory([{name: 'hello'}], action)
    ).toEqual([{name: 'hello'}])
  })
})
