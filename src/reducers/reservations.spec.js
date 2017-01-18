import deepFreeze from 'deepFreeze'
import { reservationStartDate, reservationEndDate } from './reservations'

describe('reservations reducer', () => {
  describe('reservations start date', () => {
    it('should handle initial state', () => {
      expect(
        reservationStartDate(undefined, {})
      ).toEqual({})
    })

    it('should set initial reservation start date', () => {
      const date = new Date()
      const action = {type: 'SET_RESERVATION_START_DATE', date}
      deepFreeze(date)
      expect(
        reservationStartDate(undefined, action)
      ).toEqual(date)
    })

    it('should change existing reservation start date', () => {
      const oldDate = new Date('1984-02-28')
      const newDate = new Date()
      const action = {type: 'SET_RESERVATION_START_DATE', date: newDate}
      deepFreeze(oldDate)
      expect(
        reservationStartDate(oldDate, action)
      ).toEqual(newDate)
    })
  })



  describe('reservations end date', () => {
    it('should handle initial state', () => {
      expect(
        reservationEndDate(undefined, {})
      ).toEqual({})
    })

    it('should set initial reservation end date', () => {
      const date = new Date()
      const action = {type: 'SET_RESERVATION_END_DATE', date}
      deepFreeze(date)
      expect(
        reservationEndDate(undefined, action)
      ).toEqual(date)
    })

    it('should change existing reservation end date', () => {
      const oldDate = new Date('1984-02-28')
      const newDate = new Date()
      const action = {type: 'SET_RESERVATION_END_DATE', date: newDate}
      deepFreeze(oldDate)
      expect(
        reservationEndDate(oldDate, action)
      ).toEqual(newDate)
    })
  })



})
