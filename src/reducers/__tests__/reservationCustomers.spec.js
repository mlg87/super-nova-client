import { reservationCustomers } from '../reservationCustomers'
import deepFreeze from 'deepFreeze'

describe('reservation selected inventory reducer', () => {
  it('should handle initial state', () => {
    expect(
      reservationCustomers(undefined, {})
    ).toEqual([])
  })

  it('should set reservation customers', () => {
    const action = {
      type: 'SET_RESERVATION_CUSTOMERS',
      payload: [{name: 'avi'}]
    }

    expect(
      reservationCustomers(undefined, {...action})
    ).toEqual([{name: 'avi'}])

    const state = {name: 'pete'}
    deepFreeze(state)

    expect(
      reservationCustomers(state,  {...action})
    ).toEqual([{name: 'avi'}])
  })

  it('should return current state on default', () => {
    const action = {
      type: 'OTHER_ACTION',
      payload: [{name: 'Alon'}]
    }
    expect(
      reservationCustomers([{name: 'Mike'}], action)
    ).toEqual([{name: 'Mike'}])
  })
})
