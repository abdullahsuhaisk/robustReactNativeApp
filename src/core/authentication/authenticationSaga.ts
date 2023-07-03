import { put, call, all, takeLatest } from 'redux-saga/effects';

import * as actionCreators from './authenticationActionCreators';
import * as actionTypes from './authenticationActionTypes';
import { Login } from './authenticationService';

function* LoginSaga({ mail, password }: actionTypes.AuthenticationAction) {
  // SAGA: Action creators works reducer ?
  try {
    yield put(actionCreators.getAuthenticationRequest());
    const response = yield call(Login, { mail, password });
    yield put(actionCreators.getAuthenticationSucces());
    yield put(actionCreators.setCredentials(response.data));

  } catch (error: any | string) {
    yield put(actionCreators.getAuthenticationFailure(error));
  }
}

function* LogoutSaga() {
  // SAGA: Action creators works reducer ?
  try {
    yield put(actionCreators.getAuthenticationRequest());
    // const response = yield call(Login, { mail, password });
    yield put(actionCreators.setCredentials({}));
    yield put(actionCreators.getAuthenticationSucces());

    // yield put(actionCreators.getLogoutSucces());
  } catch (error: any | string) {
    yield put(actionCreators.getAuthenticationFailure(error));
  }
}

export default function* authenticationSaga() {
  yield all([takeLatest(actionTypes.GET_LOGIN, LoginSaga)]);
  yield all([takeLatest(actionTypes.GET_LOGOUT, LogoutSaga)]);


  // SAGA: rootSaga connects it
  //   yield all([fork(watchOnLoadAuthentication)]);
}

