import { reservationSelectedInventory } from './reservationSelectedInventory'
import deepFreeze from 'deepFreeze'

describe('reservation selected inventory reducer', () => {
  it('should handle initial state', () => {
    expect(
      reservationSelectedInventory(undefined, {})
    ).toEqual([])
  })

  it('should throw if item has no uuid', () => {
    const action = {
      type: 'ADD_INVENTORY_TO_RESERVATION',
      payload: {name: 'hello'}
    }

    expect(() => {
      reservationSelectedInventory(undefined, {...action})
    }).toThrowError('item must have uuid')
  })

  it('should add inventory item', () => {
    const action = {
      type: 'ADD_INVENTORY_TO_RESERVATION',
      payload: {uuid: 'hello'}
    }

    expect(
      reservationSelectedInventory(undefined, {...action})
    ).toEqual([{uuid: 'hello'}])

    const state = [{uuid: 'hi'}]
    deepFreeze(state)

    expect(
      reservationSelectedInventory(state,  {...action})
    ).toEqual([{uuid: 'hi'}, {uuid: 'hello'}])
  })

  it('should not add a duplicate (by uuid)', () => {
    const action = {
      type: 'ADD_INVENTORY_TO_RESERVATION',
      payload: {uuid: 'hello'}
    }

    const state = [{uuid: 'hi'}, {uuid: 'hello'}]
    deepFreeze(state)

    expect(
      reservationSelectedInventory(state,  {...action})
    ).toEqual(state)
  })

  it('should remove an item from the selected inventory', () => {
    const action = {
      type: 'REMOVE_INVENTORY_FROM_RESERVATION',
      payload: 'hello'
    }

    const state = [{uuid: 'hi'}, {uuid: 'hello'}]
    deepFreeze(state)

    expect(
      reservationSelectedInventory(state,  {...action})
    ).toEqual([{uuid: 'hi'}])
  })

  it('should return current state on default', () => {
    const action = {
      type: 'OTHER_ACTION',
      payload: [{uuid: 'hi'}]
    }
    expect(
      reservationSelectedInventory([{uuid: 'hello'}], action)
    ).toEqual([{uuid: 'hello'}])
  })
})
