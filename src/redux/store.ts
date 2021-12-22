import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { currencyReducer, saga } from './ducks/currency';

const sagaMiddleware = createSagaMiddleware();
export const rootReducer = combineReducers({ currencyReducer });
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);

export type RootState = ReturnType<typeof rootReducer>;
export const useTypedSelector: TypedUseSelectorHook<RootState>= useSelector;

export default store;
