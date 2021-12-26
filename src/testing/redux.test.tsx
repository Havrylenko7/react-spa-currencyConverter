import { currencyReducer, getCurrencySuccess, getCurrencyFetch, workGetCurrencyFetch, initialState} from '../redux/ducks/currency';
import { currencyFetch } from '../api'

describe ('Store', () => {
  it('should get success', () => {
    expect(getCurrencySuccess('rates')).toEqual({
      type: 'GET_CURRENCY_SUCCESS',
      payload: 'rates'
    });
  });

  it('should get fetch', () => {
    expect(getCurrencyFetch()).toEqual({
      type: 'GET_CURRENCY_FETCH'
    });
  });

  it('should compare initialState', () => {
    const root = currencyReducer(initialState, workGetCurrencyFetch());
    expect(root).toEqual(initialState)
  });

  it('should compare api', () => {
    const api = Promise.resolve(workGetCurrencyFetch());
    expect(api).toEqual(currencyFetch());
  });
});
