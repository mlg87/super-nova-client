export const reservationCustomers = (state = [], {type, payload}) => {
  switch (type) {
    case 'SET_RESERVATION_CUSTOMERS':
      return payload
    default:
      return state
  }
}
