export const reservationStartDate = (state = {}, action) => {
  switch (action.type) {
    case 'SET_RESERVATION_START_DATE':
      return {
        reservationStartDate: action.reservationStartDate
      }
    default:
      return state
  }
}
