import * as c from 'constants/forms'

export const formUpdateValue = (name, value) => {
  return dispatch => dispatch({
    type: c.FORM_UPDATE_VALUE,
    name,
    value
  });
}

export const formReset = () => {
  return dispatch => dispatch({
    type: c.FORM_RESET
  });
}
