import * as actions from '../index'

describe('userId actions', () => {
  describe('setUserId', () => {
    it('should create SET_USER_ID', () => {
      expect(actions.setUserId(1)).toEqual({
        type: 'SET_USER_ID',
        userId: 1,
      })
    })
  })

  describe('unsetUserId', () => {
    it('should create UNSET_USER_ID', () => {
      expect(actions.unsetUserId()).toEqual({
        type: 'UNSET_USER_ID'
      })
    })
  })
})

describe('data loading', () => {
  describe('data loaded', () => {
    it('should create SET_LOADING_STATE action with false', () => {
      expect(actions.dataLoaded()).toEqual({
        type: 'SET_LOADING_STATE',
        value: false
      })
    })
  })
})
