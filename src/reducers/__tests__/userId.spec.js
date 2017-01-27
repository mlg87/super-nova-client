import { userId } from '../userId'

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
      userId(undefined, {...action, userId: 1})
    ).toEqual(1)

    expect(
      userId(1,  {...action, userId: 2})
    ).toEqual(2)
  })

  it('should throw error if no valid userId provided', () => {
    const action = {
      type: 'SET_USER_ID',
    }
    expect(() => {
      userId(1, action)
    }).toThrowError('invalid user ID')

    expect(() => {
      userId(2,  {...action, userId: 'hi'})
    }).toThrowError('invalid user ID')
  })

  it('should unset the current user', () => {
    expect(
      userId(1, {type: 'UNSET_USER_ID'})
    ).toEqual(null)
  })

  it('should return current state on default', () => {
    const action = {
      type: 'OTHER_ACTION',
      userId: 1
    }
    expect(
      userId(2, action)
    ).toEqual(2)
  })
})
