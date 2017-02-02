import { usersConfigTypes as UserTypes } from 'actions/users'

export const initialState = {
  error: null,
  userLogout: null
}

export const configReducer = ( state = initialState, action ) => {
  const { type } = action

  console.log('UserTypes', UserTypes);

  return state

  // switch (type) {
  //   case UserTypes.USERS_GET_FAILURE:
  //   case UserTypes.USER_REGISTER_FAILURE:
  //   case UserTypes.USERS_GET_FAILURE:
  //
  //
  //     break;
  //   default:
  //
  // }
}
