import * as c from 'constants/forms'

const initialState = { values: {} }

export const formReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case c.FORM_UPDATE_VALUE:
      return {...state, {
        values: {...state.values, {
          [action.name]: action.value
        }}
      }}

      // return ({}, state, {
      //   values: assign({}, state.values, {
      //     [action.name]: action.value
      //   })
      // })

    case c.FORM_RESET:
      return initialState

    default:
      return state
  }
}
