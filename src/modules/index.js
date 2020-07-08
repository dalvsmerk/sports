import { all } from 'redux-saga/effects';
import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import { sportsReducer, sportsSaga } from './sports';

const rootReducer = combineReducers({
  sports: sportsReducer,
});

function* rootSaga() {
  yield all([sportsSaga()]);
}

export const initStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
