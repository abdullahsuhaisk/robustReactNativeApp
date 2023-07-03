import * as actions from './authenticationActionTypes';

const initialState: any = {};

export default function AuthenticationReducer(
  state = initialState,
  action: actions.AuthenticationAction,
) {
  switch (action.type) {
    case actions.SET_CREDENTIALS:
    case actions.GET_AUTHENTICATION_SUCCESS:
      return {
        data: action.data,
      };
    case actions.GET_LOGOUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
}
