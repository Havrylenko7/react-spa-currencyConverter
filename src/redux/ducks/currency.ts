import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';

import { currencyFetch } from '../../api';

export const GET_CURRENCY_FETCH = 'GET_CURRENCY_FETCH';
export const GET_CURRENCY_SUCCESS = 'GET_CURRENCY_SUCCESS';

export interface CurrencyState {
  rates: string[] | number[]
};

export const initialState: CurrencyState = {
  rates: []
};

export interface CurrencyAction {
  type: string,
  payload?: any
};

export const currencyReducer = (state: CurrencyState = initialState, action: CurrencyAction) => {
  switch (action.type) {
    case GET_CURRENCY_SUCCESS: 
      return {...state, rates: action.payload};
    default: 
      return state;
  };
};

export const getCurrencyFetch = () => ({
  type: GET_CURRENCY_FETCH
});

export const getCurrencySuccess = (rates: []) => ({
  type: GET_CURRENCY_SUCCESS,
  payload: rates
});

export function* workGetCurrencyFetch(): SagaIterator {
  const response = yield call(currencyFetch);
  yield put(getCurrencySuccess(response));
};

export function* saga() {
  yield takeEvery(GET_CURRENCY_FETCH, workGetCurrencyFetch);
};
