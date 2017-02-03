import { reservationSelectedInventory } from '../reservationSelectedInventory'
import deepFreeze from 'deepFreeze'

describe('reservation selected inventory reducer', () => {
  it('should handle initial state', () => {
    expect(
      reservationSelectedInventory(undefined, {})
    ).toEqual([])
  })

  it('should throw if item has no item_id', () => {
    const action = {
      type: 'ADD_INVENTORY_TO_RESERVATION',
      payload: {name: 'hello'}
    }

    expect(() => {
      reservationSelectedInventory(undefined, {...action})
    }).toThrowError('item must have item_id')
  })

  it('should add inventory item', () => {
    const action = {
      type: 'ADD_INVENTORY_TO_RESERVATION',
      payload: {item_id: 'hello'}
    }

    expect(
      reservationSelectedInventory(undefined, {...action})
    ).toEqual([{item_id: 'hello'}])

    const state = [{item_id: 'hi'}]
    deepFreeze(state)

    expect(
      reservationSelectedInventory(state,  {...action})
    ).toEqual([{item_id: 'hi'}, {item_id: 'hello'}])
  })

  it('should not add a duplicate (by item_id)', () => {
    const action = {
      type: 'ADD_INVENTORY_TO_RESERVATION',
      payload: {item_id: 'hello'}
    }

    const state = [{item_id: 'hi'}, {item_id: 'hello'}]
    deepFreeze(state)

    expect(
      reservationSelectedInventory(state,  {...action})
    ).toEqual(state)
  })

  it('should remove an item from the selected inventory', () => {
    const action = {
      type: 'REMOVE_INVENTORY_FROM_RESERVATION',
      payload: 1
    }

    const state = [{item_id: 1}, {item_id: 2}]
    deepFreeze(state)

    expect(
      reservationSelectedInventory(state,  {...action})
    ).toEqual([{item_id: 2}])
  })

  it('should set active selected inventory', () => {
    const action = {
      type: 'SET_ACTIVE_SELECTED_INVENTORY',
      payload: 1
    }

    const state = [{item_id: 1}, {item_id: 2}]
    deepFreeze(state)

    expect(
      reservationSelectedInventory(state,  {...action})
    ).toEqual([{item_id: 1, active: true}, {item_id: 2, active: false}])
  })

  it('should unset other active selected inventory', () => {
    const action = {
      type: 'SET_ACTIVE_SELECTED_INVENTORY',
      payload: 1
    }

    const state = [{item_id: 1, active: false}, {item_id: 2, active: true}]
    deepFreeze(state)

    expect(
      reservationSelectedInventory(state,  {...action})
    ).toEqual([{item_id: 1, active: true}, {item_id: 2, active: false}])
  })

  it('should unset all active selected inventory', () => {
    const action = {
      type: 'SET_ACTIVE_SELECTED_INVENTORY',
      payload: 0
    }

    const state = [{item_id: 1, active: false}, {item_id: 2, active: true}]
    deepFreeze(state)

    expect(
      reservationSelectedInventory(state,  {...action})
    ).toEqual([{item_id: 1, active: false}, {item_id: 2, active: false}])
  })

  it('should return current state on default', () => {
    const action = {
      type: 'OTHER_ACTION',
      payload: [{item_id: 'hi'}]
    }
    expect(
      reservationSelectedInventory([{item_id: 'hello'}], action)
    ).toEqual([{item_id: 'hello'}])
  })
})
