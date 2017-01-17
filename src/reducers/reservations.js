export const reservationStartDate = (state = {}, action) => {
  switch (action.type) {
    case 'SET_RESERVATION_START_DATE':
      return action.date
    default:
      return state
  }
}

export const reservationEndDate = (state = {}, action) => {
  switch (action.type) {
    case 'SET_RESERVATION_END_DATE':
      return action.date
    default:
      return state
  }
}
