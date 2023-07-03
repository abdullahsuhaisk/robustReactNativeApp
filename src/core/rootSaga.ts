import { all, fork } from 'redux-saga/effects';
import authenticationSaga from './authentication/authenticationSaga';

export default function* rootSaga() {
  yield all([fork(authenticationSaga)]);
}
