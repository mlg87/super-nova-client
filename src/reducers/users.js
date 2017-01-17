const users = (state = {}, action) => {
  // console.log('USER REDUCER CALLED. STATE: ', state, ' ACTION: ', action);
  switch (action.type) {
    case 'USER_REGISTER':
    case 'USER_LOGIN':
      return {
        // perhaps use Object.assign here?
        ...state,
        username: action.username,
        password: action.password
      }
    case 'USER_LOGOUT':
      return {
        ...state,
        username: action.username
      }
    default:
      return state
  }
}

export default users





// const todo = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return {
//         id: action.id,
//         text: action.text,
//         completed: false
//       }
//     case 'TOGGLE_TODO':
//       if (state.id !== action.id) {
//         return state
//       }
//
//       return {
//         ...state,
//         completed: !state.completed
//       }
//     default:
//       return state
//   }
// }
//
// const todos = (state = [], action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return [
//         ...state,
//         todo(undefined, action)
//       ]
//     case 'TOGGLE_TODO':
//       return state.map(t =>
//         todo(t, action)
//       )
//     default:
//       return state
//   }
// }
//
// export default todos
