import { combineReducers } from 'redux';
import isLoadingReducer from './isLoadingReducer';
import errorReducer from './errorReducer';
import authenticationReducer from './authentication/authenticationReducer';

const rootReducer = combineReducers({
  isLoading: isLoadingReducer,
  error: errorReducer,
  authentication: authenticationReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
