export const reservationSelectedInventory = (state = [], {type, payload}) => {
  switch (type) {
    case 'ADD_INVENTORY_TO_RESERVATION':
      if (!payload.item_id) {
        throw new Error('item must have item_id')
      }
      const itemInList = !!state.filter(item => item.item_id === payload.item_id).length
      if (itemInList) {
        return state
      }
      return [...state, payload]

    case 'REMOVE_INVENTORY_FROM_RESERVATION':
      return state.filter((item) => item.item_id !== payload)

    case 'SET_ACTIVE_SELECTED_INVENTORY':
      return state.map((item) => {
        return {...item, active: payload === item.item_id}
      })

    default:
      return state
  }
}
