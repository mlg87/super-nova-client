export const reservationSelectedInventory = (state = [], {type, payload}) => {
  switch (type) {
    case 'ADD_INVENTORY_TO_RESERVATION':
      if (!payload.uuid) {
        throw new Error('item must have uuid')
      }
      const itemInList = !!state.filter(item => item.uuid === payload.uuid).length
      if (itemInList) {
        return state
      }
      return [...state, payload]
    case 'REMOVE_INVENTORY_FROM_RESERVATION':
      return state.filter((item) => item.uuid !== payload)
    default:
      return state
  }
}
