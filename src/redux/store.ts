import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';

import { currencyReducer, saga } from './ducks/currency';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({ currencyReducer });
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);

export default store;
