import { userId } from './userId'

describe('user logged in reducer', () => {
  it('should handle initial state', () => {
    expect(
      userId(undefined, {})
    ).toEqual(null)
  })

  it('should set logged in state', () => {
    const action = {
      type: 'SET_USER_ID',
    }
    expect(
      userId(undefined, {...action, id: 1})
    ).toEqual(1)

    expect(
      userId(1,  {...action, id: 2})
    ).toEqual(2)
  })

  it('should return current state if no valid id provided', () => {
    const action = {
      type: 'SET_USER_ID',
    }
    expect(
      userId(1, action)
    ).toEqual(1)

    expect(
      userId(2,  {...action, id: 'hi'})
    ).toEqual(2)
  })

  it('should unset the current user', () => {
    expect(
      userId(1, {type: 'UNSET_USER_ID'})
    ).toEqual(null)
  })

  it('should return current state on default', () => {
    const action = {
      type: 'OTHER_ACTION',
      id: 1
    }
    expect(
      userId(2, action)
    ).toEqual(2)
  })
})
