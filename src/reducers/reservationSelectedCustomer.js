export const reservationSelectedCustomer = (state = {}, {type, payload}) => {
  switch (type) {
    case 'SELECT_RESERVATION_CUSTOMER':
      return payload
    default:
      return state
  }
}
