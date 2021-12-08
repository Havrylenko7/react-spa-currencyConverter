import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_CURRENCY_FETCH, GET_CURRENCY_SUCCESS } from './actions';

function currencyFetch() {
  return fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json').then(response => response.json());
}

function* workGetCurrencyFetch() {
  const rates = yield call(currencyFetch);
  yield put({ type: GET_CURRENCY_SUCCESS, rates})
}

function* mySaga() {
  yield takeEvery(GET_CURRENCY_FETCH, workGetCurrencyFetch);
}

export default mySaga;
