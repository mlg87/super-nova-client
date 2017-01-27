import { reservationSelectedCustomer } from './reservationSelectedCustomer'
import deepFreeze from 'deepFreeze'

describe('reservation selected inventory reducer', () => {
  it('should handle initial state', () => {
    expect(
      reservationSelectedCustomer(undefined, {})
    ).toEqual({})
  })

  it('should set reservation customer', () => {
    const action = {
      type: 'SELECT_RESERVATION_CUSTOMER',
      payload: {name: 'avi'}
    }

    expect(
      reservationSelectedCustomer(undefined, {...action})
    ).toEqual({name: 'avi'})

    const state = {name: 'pete'}
    deepFreeze(state)

    expect(
      reservationSelectedCustomer(state,  {...action})
    ).toEqual({name: 'avi'})
  })

  it('should return current state on default', () => {
    const action = {
      type: 'OTHER_ACTION',
      payload: {name: 'Alon'}
    }
    expect(
      reservationSelectedCustomer({name: 'Mike'}, action)
    ).toEqual({name: 'Mike'})
  })
})
