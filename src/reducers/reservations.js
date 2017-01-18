import moment from 'moment'

export const reservationStartDate = (state = null, action) => {
  switch (action.type) {
    case 'SET_RESERVATION_START_DATE':
      if (!moment.isMoment(action.date)) {
        throw new Error('start date must be a moment')
      }
      return action.date
    case 'UNSET_RESERVATION_START_DATE':
      return null
    default:
      return state
  }
}

export const reservationEndDate = (state = null, action) => {
  switch (action.type) {
    case 'SET_RESERVATION_END_DATE':
      if (!moment.isMoment(action.date)) {
        throw new Error('end date must be a moment')
      }
      return action.date
    case 'UNSET_RESERVATION_END_DATE':
      return null
    default:
      return state
  }
}
