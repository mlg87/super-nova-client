import { reservationSelectedInventory } from './reservationSelectedInventory'

describe('reservation selected inventory reducer', () => {
  it('should handle initial state', () => {
    expect(
      reservationSelectedInventory(undefined, {})
    ).toEqual([])
  })

  // it('should add inventory item', () => {
  //   const action = {
  //     type: 'ADD_INVENTORY_TO_RESERVATION',
  //     payload: 'hello'
  //   }
  //
  //   expect(
  //     reservationSelectedInventory(undefined, {...action})
  //   ).toEqual(['hello'])
  //
  //   expect(
  //     reservationSelectedInventory(['hi'],  {...action})
  //   ).toEqual(['hello'])
  // })
  //
  // it('should return current state on default', () => {
  //   const action = {
  //     type: 'OTHER_ACTION',
  //     payload: ['dude']
  //   }
  //   expect(
  //     reservationSelectedInventory(['chick'], action)
  //   ).toEqual(['chick'])
  // })
})
