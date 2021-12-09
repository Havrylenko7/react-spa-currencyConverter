import { GET_CURRENCY_SUCCESS } from './actions';

const myFirstReducer = (state = { rates: [] }, action) => {

  switch (action.type) {
    case GET_CURRENCY_SUCCESS:
      return { ...state, rates: action.rates }
    default:
      return state;
  }
};

export default myFirstReducer;
