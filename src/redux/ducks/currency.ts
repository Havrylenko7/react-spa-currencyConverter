import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';

import { currencyFetch } from '../../api';

export const GET_CURRENCY_FETCH = 'GET_CURRENCY_FETCH';
export const GET_CURRENCY_SUCCESS = 'GET_CURRENCY_SUCCESS';

export const getCurrencyFetch = () => ({
  type: GET_CURRENCY_FETCH
});

interface CurrencyState {
  rates: string[] | number[]
};

const initialState: CurrencyState = {
  rates: []
};

interface CurrencyAction {
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

const getCurrencySuccess = (rates: []) => ({
  type: GET_CURRENCY_SUCCESS,
  payload: rates
});

function* workGetCurrencyFetch(): SagaIterator {
  const response = yield call(currencyFetch);
  yield put(getCurrencySuccess(response));
};

export function* saga() {
  yield takeEvery(GET_CURRENCY_FETCH, workGetCurrencyFetch);
};
