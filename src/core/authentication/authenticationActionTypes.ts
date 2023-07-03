const ACTION = 'AuthenticationActionTypes/';
export const GET_AUTHENTICATION = ACTION + 'GET_AUTHENTICATION';

export const GET_AUTHENTICATION_REQUEST = ACTION + 'GET_AUTHENTICATION_REQUEST';
export interface GetAuthenticationRequestAction {
  type: typeof GET_AUTHENTICATION_REQUEST;
}

export const GET_AUTHENTICATION_SUCCESS = ACTION + 'GET_AUTHENTICATION_SUCCESS';
export interface GetAuthenticationSuccessAction {
  type: typeof GET_AUTHENTICATION_SUCCESS;
}

export const GET_AUTHENTICATION_FAILURE = ACTION + 'GET_AUTHENTICATION_FAILURE';
export interface GetAuthenticationFailureAction {
  type: typeof GET_AUTHENTICATION_FAILURE;
  error: Error | string;
}

export const GET_LOGIN = ACTION + 'GET_LOGIN';
export interface GetLoginAction {
  type: typeof GET_LOGIN;
  mail: string;
  password: string;
}

export const GET_SIGNUP = ACTION + 'GET_SIGNUP';
export interface GetSignUpAction {
  type: typeof GET_SIGNUP;
  mail: string;
  password: string;
  category: any;
}

export const SET_CREDENTIALS = ACTION + 'SET_CREDENTIALS';
export interface SetCredentialsAction {
  type: typeof SET_CREDENTIALS;
  data: any;
}

export const GET_LOGOUT = ACTION + 'GET_LOGOUT';
export interface GetLogoutAction {
  type: typeof GET_LOGOUT;
}

// export const GET_LOGOUT_SUCCESS = ACTION + 'GET_LOGOUT_SUCCESS';
// export interface GetLogoutSuccess {
//   type: typeof GET_LOGOUT_SUCCESS;
// }

// export const GET_LOGOUT_FAILURE = ACTION + 'GET_LOGOUT_FAILURE';
// export interface GetLogoutFailure {
//   type: typeof GET_LOGOUT_FAILURE;
//   error: Error | string;
// }

export type AuthenticationAction =
  // | GetLoginRequestAction
  // | GetSignUpRequestAction
  | GetAuthenticationSuccessAction
  | GetAuthenticationFailureAction
  | GetLoginAction
  | GetSignUpAction
  | SetCredentialsAction
  | GetAuthenticationRequestAction
  | GetLogoutAction
  // | GetLogoutSuccess
  // | GetLogoutFailure;
