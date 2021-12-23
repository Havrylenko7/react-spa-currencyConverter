import { currencyReducer, getCurrencySuccess, getCurrencyFetch, workGetCurrencyFetch, saga, CurrencyState, initialState} from '../redux/ducks/currency';

describe ('Redux testing', () => {

  it('getCurrencySuccess', () => {
    expect(getCurrencySuccess('rates')).toEqual({
      type: 'GET_CURRENCY_SUCCESS',
      payload: 'rates'
    });
  });

  it('getCurrencyFetch', () => {
    expect(getCurrencyFetch()).toEqual({
      type: 'GET_CURRENCY_FETCH'
    }); 
  });

  it('currencyReducer', () => {
    const root = currencyReducer(initialState, workGetCurrencyFetch());
    expect(root).toEqual(initialState)
  })
});
