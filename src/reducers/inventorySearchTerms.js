export const inventorySearchTerms = (state = [], action) => {
  switch (action.type) {
    case 'ADD_INVENTORY_SEARCH_TERM':
      return [...state, action.payload]
    case 'REMOVE_INVENTORY_SEARCH_TERM':
      return state.filter((searchTerm) => searchTerm !== action.payload)
    default:
      return state
  }
}
