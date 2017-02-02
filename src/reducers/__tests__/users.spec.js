import deepFreeze from 'deep-freeze'
import { usersReducer, initialState } from '../users'
import * as ActionTypes from 'actions/users'

describe('users reducer', () => {
  it('should handle initial state', () => {
    expect(
      usersReducer(undefined, {})
    ).toEqual(initialState)
  })

  it('should set API fetch state', () => {
    const usersGetRequest = {
      type: ActionTypes.USERS_GET_REQUEST
    }
    const userRegisterRequest = {
      type: ActionTypes.USER_REGISTER_REQUEST
    }
    const userLoginRequest = {
      type: ActionTypes.USER_LOGIN_REQUEST
    }
    const expectedState = {
      ...initialState,
      isFetching: true
    }

    deepFreeze(usersGetRequest)
    deepFreeze(userRegisterRequest)
    deepFreeze(userLoginRequest)

    expect(
      usersReducer(undefined, usersGetRequest)
    ).toEqual(expectedState)

    expect(
      usersReducer(undefined, userRegisterRequest)
    ).toEqual(expectedState)

    expect(
      usersReducer(undefined, userLoginRequest)
    ).toEqual(expectedState)
  })

  it('should set the users key to an arr of users on success for users GET', () => {
    const usersGetSuccess = {
      type: ActionTypes.USERS_GET_SUCCESS,
      response: {
        data: [1, 2, 3, 4]
      }
    }
    // isFetching === false in initialState
    const expectedState = {
      ...initialState,
      users: [1, 2, 3, 4]
    }

    deepFreeze(usersGetSuccess)

    expect(
      usersReducer(undefined, usersGetSuccess)
    ).toEqual(expectedState)
  })

  it('should throw error if users is not an array on success for users GET', () => {
    const usersGetSuccess = {
      type: ActionTypes.USERS_GET_SUCCESS,
      response: {
        data: 'not an array'
      }
    }

    deepFreeze(usersGetSuccess)

    expect(() => {
      usersReducer(undefined, usersGetSuccess)
    }).toThrowError('Users must be an array')
  })

  it('should update the selected users from the table accordingly', () => {
    const usersUpdateSelected = {
      type: ActionTypes.USERS_UPDATE_SELECTED,
      indexes: [1, 2, 3, 4]
    }
    const expectedState = {
      ...initialState,
      usersSelected: [1, 2, 3, 4]
    }

    deepFreeze(usersUpdateSelected)

    expect(
      usersReducer(undefined, usersUpdateSelected)
    ).toEqual(expectedState)
  })

  it('should throw error if indexes is not an array when updating selected users', () => {
    const usersUpdateSelected = {
      type: ActionTypes.USERS_UPDATE_SELECTED,
      indexes: 'not an array'
    }

    deepFreeze(usersUpdateSelected)

    expect(() => {
      usersReducer(undefined, usersUpdateSelected)
    }).toThrowError('Indexes must be an array')
  })

  it('should remove the appropriate user from the users arr', () => {
    const usersPullDeleted = {
      type: ActionTypes.USERS_PULL_DELETED,
      id: 4
    }
    const beforeState = {
      ...initialState,
      users: [{id: 1}, {id: 2}, {id: 3}, {id: 4}]
    }
    const expectedState = {
      ...initialState,
      users: [{id: 1}, {id: 2}, {id: 3}]
    }

    deepFreeze(usersPullDeleted)
    deepFreeze(beforeState)

    expect(
      usersReducer(beforeState, usersPullDeleted)
    ).toEqual(expectedState)
  })

  it('should throw error if id is not a number when pulling deleted users', () => {
    const usersPullDeleted = {
      type: ActionTypes.USERS_PULL_DELETED,
      id: 'not a number'
    }

    deepFreeze(usersPullDeleted)

    expect(() => {
      usersReducer(undefined, usersPullDeleted)
    }).toThrowError(`ID must be a number: ${usersPullDeleted.id}`)

  })
})
