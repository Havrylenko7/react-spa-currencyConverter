import { call, put, takeEvery } from 'redux-saga/effects';

export const GET_CURRENCY_FETCH = 'GET_CURRENCY_FETCH';
export const GET_CURRENCY_SUCCESS = 'GET_CURRENCY_SUCCESS';

export const getCurrencyFetch = () => ({
  type: GET_CURRENCY_FETCH
});

export const currencyReducer = (state = { rates: [] }, action) => {
  switch (action.type) {
    case GET_CURRENCY_SUCCESS:
      return { ...state, rates: action.rates }
    default:
      return state;
  }
};

function currencyFetch() {
  return fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json').then(response => response.json());
}

function* workGetCurrencyFetch() {
  const rates = yield call(currencyFetch);
  yield put({ type: GET_CURRENCY_SUCCESS, rates})
}

export function* saga() {
  yield takeEvery(GET_CURRENCY_FETCH, workGetCurrencyFetch);
}
