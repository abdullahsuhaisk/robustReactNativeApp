import * as actions from './authenticationActionTypes';

export function getAuthenticationRequest(): actions.GetAuthenticationRequestAction {
  return {
    type: actions.GET_AUTHENTICATION_REQUEST,
  };
}

export function getLogin(
  mail: string,
  password: string,
): actions.GetLoginAction {
  return {
    type: actions.GET_LOGIN,
    mail: mail,
    password: password,
  };
}

export function getAuthenticationSucces(): actions.GetAuthenticationSuccessAction {
  return {
    type: actions.GET_AUTHENTICATION_SUCCESS,
  };
}

export function getAuthenticationFailure(
  error: any,
): actions.GetAuthenticationFailureAction {
  return {
    type: actions.GET_AUTHENTICATION_FAILURE,
    error: error,
  };
}

export function setCredentials(data: any): actions.SetCredentialsAction {
  return {
    type: actions.SET_CREDENTIALS,
    data: data,
  };
}

export function getLogout(): actions.GetLogoutAction {
  return {
    type: actions.GET_LOGOUT,
  };
}

// export function getLogoutSucces(): actions.GetLogoutSuccess {
//   return {
//     type: actions.GET_LOGOUT_SUCCESS,
//   };
// }

// export function getLogoutFailure(): actions.GetLogoutFailure {
//   return {
//     type: actions.GET_LOGOUT_FAILURE,
//     error: error,
//   };
// }
