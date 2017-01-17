import { reservationStartDate } from './reservations'

describe('reservations reducer', () => {
  describe('reservations start date', () => {
    it('should handle initial state', () => {
      expect(
        reservationStartDate(undefined, {})
      ).toEqual({})
    })

    it('should set initial reservation start date', () => {
      const stateBefore = {}
      const date = new Date()
      const action = {
        type: 'SET_RESERVATION_START_DATE',
        reservationStartDate: date
      }
      const stateAfter = {
        reservationStartDate: date
      }

      expect(
        reservationStartDate(stateBefore, action)
      ).toEqual(stateAfter)
    })

    it('should change existing reservation start date', () => {
      const oldDate = new Date('1984-02-28')
      const newDate = new Date()
      const stateBefore = {
        reservationStartDate: oldDate
      }
      const action = {
        type: 'SET_RESERVATION_START_DATE',
        reservationStartDate: newDate
      }
      const stateAfter = {
        reservationStartDate: newDate
      }

      expect(
        reservationStartDate(stateBefore, action)
      ).toEqual(stateAfter)
    })
  })



})
