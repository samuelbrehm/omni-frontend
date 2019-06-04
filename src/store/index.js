import { createStore, applyMiddleware } from 'redux';
import createsagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';

import history from '~/routes/history';
import rootReducer from './ducks';
import rootSaga from './sagas';

const sagaMiddleware = createsagaMiddleware();

const middlewares = [sagaMiddleware, routerMiddleware(history)];

const store = createStore(
  rootReducer(history),
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);

export default store;
