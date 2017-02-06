export const inventoryItemTypes = (state = [], action) => {
  switch (action.type) {
    case 'SET_ITEM_TYPES':
      return action.payload;
    default:
     return state;
  }
}
