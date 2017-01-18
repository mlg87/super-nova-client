import deepFreeze from 'deepFreeze'
import moment from 'moment'
import { reservationStartDate, reservationEndDate } from './reservations'

describe('reservations reducer', () => {
  describe('reservations start date', () => {
    it('should init as undefined', () => {
      expect(
        reservationStartDate(undefined, {})
      ).toEqual(null)
    })

    it('should set initial reservation start date', () => {
      const date = moment()
      const action = {type: 'SET_RESERVATION_START_DATE', date}
      deepFreeze(date)
      expect(
        reservationStartDate(undefined, action)
      ).toEqual(date)
    })

    it('should change existing reservation start date', () => {
      const oldDate = moment('1984-02-28')
      const newDate = moment()
      const action = {type: 'SET_RESERVATION_START_DATE', date: newDate}
      deepFreeze(oldDate)
      expect(
        reservationStartDate(oldDate, action)
      ).toEqual(newDate)
    })

    it('should unset start date', () => {
      const date = moment()
      const action = {type: 'UNSET_RESERVATION_START_DATE'}
      deepFreeze(date)
      expect(
        reservationStartDate(date, action)
      ).toEqual(null)
    })

    it('should throw if date is not a moment', () => {
      const date = new Date()
      const action = {type: 'SET_RESERVATION_START_DATE', date: date}

      expect(() => {
        reservationStartDate(date, action)
      }).toThrowError('start date must be a moment')

    })

    it('should return current state by default', () => {
      const date = moment()
      const action = {type: 'ACTION', date: 'hello'}
      deepFreeze(date)
      expect(
        reservationStartDate(date, action)
      ).toEqual(date)
    })

  })



  describe('reservations end date', () => {
    it('should init as undefined', () => {
      expect(
        reservationEndDate(undefined, {})
      ).toEqual(null)
    })

    it('should set initial reservation end date', () => {
      const date = moment()
      const action = {type: 'SET_RESERVATION_END_DATE', date}
      deepFreeze(date)
      expect(
        reservationEndDate(undefined, action)
      ).toEqual(date)
    })

    it('should change existing reservation end date', () => {
      const oldDate = moment('1984-02-28')
      const newDate = moment()
      const action = {type: 'SET_RESERVATION_END_DATE', date: newDate}
      deepFreeze(oldDate)
      expect(
        reservationEndDate(oldDate, action)
      ).toEqual(newDate)
    })

    it('should unset start date', () => {
      const date = moment()
      const action = {type: 'UNSET_RESERVATION_END_DATE'}
      deepFreeze(date)
      expect(
        reservationEndDate(date, action)
      ).toEqual(null)
    })

    it('should throw if date is not a moment', () => {
      const date = new Date()
      const action = {type: 'SET_RESERVATION_END_DATE', date: date}

      expect(() => {
        reservationEndDate(date, action)
      }).toThrowError('end date must be a moment')

    })


    it('should return current state by default', () => {
      const date = moment()
      const action = {type: 'ACTION', date: 'hello'}
      deepFreeze(date)
      expect(
        reservationEndDate(date, action)
      ).toEqual(date)
    })
  })



})
