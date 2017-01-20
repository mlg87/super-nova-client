import * as actions from './index'
import moment from 'moment'

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

describe('set start date', () => {
  it('should create SET_RESERVATION_START_DATE action', () => {
    const startDate = moment()
    expect(actions.setStartDate(startDate)).toEqual({
      type: 'SET_RESERVATION_START_DATE',
      date: startDate
    })
  })
})

describe('set end date', () => {
  it('should create SET_RESERVATION_END_DATE action', () => {
    const endDate = moment()
    expect(actions.setEndDate(endDate)).toEqual({
      type: 'SET_RESERVATION_END_DATE',
      date: endDate
    })
  })
})

describe('set inventory', () => {
  it('should create SET_INVENTORY action', () => {
    const inventory = ['hi']
    expect(actions.setInventory(inventory)).toEqual({
      type: 'SET_INVENTORY',
      payload: ['hi']
    })
  })
})
