import React from 'react';
import { Provider } from 'react-redux';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { Rates } from '../components';
import store from '../redux/store';

configure({ adapter: new Adapter() });

it('Rates corenders correctly', () => {
  const rates = shallow(<Provider store={store}><Rates /></Provider>)
  expect(rates).toMatchSnapshot()
});