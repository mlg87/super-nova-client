import { userLoggedIn } from './userLoggedIn'

describe('user logged in reducer', () => {
  it('should handle initial state', () => {
    expect(
      userLoggedIn(undefined, {})
    ).toEqual(false)
  })

  it('should set logged in state', () => {
    const action = {
      type: 'SET_USER_LOGGED_IN',
    }
    expect(
      userLoggedIn(undefined, {...action, value: true})
    ).toEqual(true)

    expect(
      userLoggedIn(false,  {...action, value: true})
    ).toEqual(true)

    expect(
      userLoggedIn(true,  {...action, value: true})
    ).toEqual(true)

    expect(
      userLoggedIn(true,  {...action, value: false})
    ).toEqual(false)

    expect(
      userLoggedIn(false,  {...action, value: false})
    ).toEqual(false)
  })

  it('should return current state on default', () => {
    const action = {
      type: 'OTHER_ACTION',
      value: false
    }
    expect(
      userLoggedIn(true, action)
    ).toEqual(true)
  })
})
