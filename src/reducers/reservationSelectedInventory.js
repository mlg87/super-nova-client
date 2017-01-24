export const reservationSelectedInventory = (state = [], action) => {
  if (action.type === 'ADD_INVENTORY_TO_RESERVATION') {
    return [...state, action.payload]
  }
  return state
}
