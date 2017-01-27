import deepFreeze from 'deep-freeze'
import * as userReducers from './users'
import * as userActions from 'actions/users'

describe('userApiFetch reducer', () => {
  it('should handle initial state', () => {
    expect(
      userReducers.userApiFetch(undefined, {})
    ).toEqual(false)
  })

  it('should set api fetch state', () => {
    const action = {
      type: userActions.USER_REGISTER_FETCH
    }

    deepFreeze(action)

    expect(
      userReducers.userApiFetch(undefined, {...action, isFetching: false})
    ).toEqual(false)

    expect(
      userReducers.userApiFetch(true, {...action, isFetching: false})
    ).toEqual(false)
  })

  it('should throw error if isFetching is not a boolean', () => {
    const action = {
      type: userActions.USER_REGISTER_FETCH
    }

    deepFreeze(action)

    expect(() => {
      userReducers.userApiFetch(undefined, action)
    }).toThrowError('isFetching must be a boolean')

    expect(() => {
      userReducers.userApiFetch(true, {...action, isFetching: 1})
    }).toThrowError('isFetching must be a boolean')

    expect(() => {
      userReducers.userApiFetch(true, {...action, isFetching: 'dali'})
    }).toThrowError('isFetching must be a boolean')
  })

  it('should return current state on default', () => {
    const action = {
      type: 'NOT_A_REAL_ACTION',
      isFetching: false
    }

    deepFreeze(action)

    expect(
      userReducers.userApiFetch(true, action)
    ).toEqual(true)
  })
})

describe('userApiRes reducer', () => {
  it('should handle initial state', () => {
    expect(
      userReducers.userApiRes(undefined, {})
    ).toEqual({})
  })

  it('should set payload for successful res to nothing', () => {
    const action = {
      type: userActions.USER_REGISTER_SUCCESS
    }

    deepFreeze(action)

    expect(
      userReducers.userApiRes(undefined, {...action, payload: 'success'})
    ).toEqual({})

    expect(
      userReducers.userApiRes({err: true}, {...action, payload: 'success'})
    ).toEqual({err: true})
  })

  it('should set payload for err res to an Error', () => {
    const action = {
      type: userActions.USER_REGISTER_ERROR
    }
    const err = new Error('dali')

    deepFreeze(action)
    deepFreeze(err)

    expect(
      userReducers.userApiRes(undefined, {...action, payload: err})
    ).toEqual(err)

    expect(
      userReducers.userApiRes('dali', {...action, payload: err})
    ).toEqual(err)
  })

  it('should throw err if payload is not valid', () => {
    const errAction = {
      type: userActions.USER_REGISTER_ERROR
    }

    deepFreeze(errAction)

    expect(() => {
      userReducers.userApiRes(undefined, errAction)
    }).toThrowError('invalid payload')
  })

  it('should return current state on default', () => {
    const action = {
      type: 'NOT_A_REAL_ACTION'
    }

    deepFreeze(action)

    expect(
      userReducers.userApiRes('dali', action)
    ).toEqual('dali')
  })

  it('should reset the err when told to do so', () => {
    const action = {
      type: userActions.USERS_RESET_ERR
    }

    deepFreeze(action)

    expect(
      userReducers.userApiRes(undefined, action)
    ).toEqual(null)
  })

})

describe('usersApiRes reducer', () => {
  it('should handle initial state', () => {
    expect(
      userReducers.usersApiRes(undefined, {})
    ).toEqual([])
  })

  it('should set payload for a successful res to an arr', () => {
    const successAction = {
      type: userActions.USERS_GET_SUCCESS
    }
    const arr = [1,2,3,4,5]

    deepFreeze(successAction)
    deepFreeze(arr)

    expect(
      userReducers.usersApiRes(undefined, {...successAction, payload: arr})
    ).toEqual(arr)

    expect(
      userReducers.usersApiRes(arr, {...successAction, payload: [...arr, 6]})
    ).toEqual([...arr, 6])
  })

  it('should set payload for err res to an obj', () => {
    const errAction = {
      type: userActions.USERS_GET_ERROR
    }
    const err = {
      err: {}
    }

    deepFreeze(errAction)
    deepFreeze(err)

    expect(
      userReducers.usersApiRes(undefined, {...errAction, payload: err})
    ).toEqual(err)

    expect(
      userReducers.usersApiRes([], {...errAction, payload: {...err, moreErr: {}}})
    ).toEqual({...err, moreErr: {}})
  })

  it('should throw err if payload is not valid', () => {
    const successAction = {
      type: userActions.USERS_GET_SUCCESS
    }
    const errAction = {
      type: userActions.USERS_GET_ERROR
    }

    deepFreeze(successAction)
    deepFreeze(errAction)

    expect(() => {
      userReducers.usersApiRes(undefined, successAction)
    }).toThrowError('invalid payload')

    expect(() => {
      userReducers.usersApiRes(undefined, errAction)
    }).toThrowError('invalid payload')
  })

  it('should return the current state on default', () => {
    const action = {
      type: 'NOT_A_REAL_ACTION'
    }

    deepFreeze(action)

    expect(
      userReducers.usersApiRes(undefined, action)
    ).toEqual([])
  })

  it('should pull the appropriate items from state', () => {
    const action = {
      type: userActions.USERS_PULL_DELETED,
      payload: 1
    }
    const stateBefore = [
      {id: 0},
      {id: 1},
      {id: 2},
      {id: 3},
      {id: 4}
    ]
    const stateAfter = [
      {id: 0},
      {id: 2},
      {id: 3},
      {id: 4}
    ]

    deepFreeze(action)
    deepFreeze(stateBefore)

    expect(
      userReducers.usersApiRes(stateBefore, action)
    ).toEqual(stateAfter)

  })
})

describe('usersSelected reducer', () => {
  it('should handle initial state', () => {
    expect(
      userReducers.usersSelected(undefined, {})
    ).toEqual([])
  })

  it('should set state as arr of indexes', () => {
    const action = {
      type: userActions.USERS_UPDATE_SELECTED
    }
    const arr = [1,2,3,4,5]

    deepFreeze(action)
    deepFreeze(arr)

    expect(
      userReducers.usersSelected(undefined, {...action, indexes: arr})
    ).toEqual(arr)

    expect(
      userReducers.usersSelected('dali', {...action, indexes: [...arr, 6]})
    ).toEqual([...arr, 6])
  })

  it('should throw err if indexes is not an arr', () => {
    const action ={
      type: userActions.USERS_UPDATE_SELECTED
    }

    deepFreeze(action)

    expect(() => {
      userReducers.usersSelected(undefined, action)
    }).toThrowError('indexes must be an array')
  })

  it('should return current state on default', () => {
    const action = {
      type: 'NOT_A_REAL_ACTION'
    }

    deepFreeze(action)

    expect(
      userReducers.usersSelected(undefined, action)
    ).toEqual([])
  })
})
