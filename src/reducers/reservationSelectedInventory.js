export const reservationSelectedInventory = (state = [], {type, payload}) => {
  if (type === 'ADD_INVENTORY_TO_RESERVATION') {
    if (!payload.uuid) {
      throw new Error('item must have uuid')
    }
    const itemInList = !!state.filter(item => item.uuid === payload.uuid).length
    if (itemInList) {
      return state
    }
    return [...state, payload]
  }
  return state
}
