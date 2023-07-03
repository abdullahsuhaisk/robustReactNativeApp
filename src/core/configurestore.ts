import { createStore, applyMiddleware, } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from '@redux-devtools/extension';
import reduxLogger from 'redux-logger';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

// const configureStore = () => {
//   const store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(sagaMiddleware, reduxLogger)),
//   );
//   sagaMiddleware.run(rootSaga);
//   return store;
// };

const configureStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware, reduxLogger)))
sagaMiddleware.run(rootSaga);

export default configureStore;
