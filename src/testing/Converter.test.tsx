import React from 'react';
import { Provider } from 'react-redux';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { Converter } from '../components';
import store from '../redux/store';

configure({ adapter: new Adapter() });

it('Converter renders correctly', () => {
  const converter = shallow(<Provider store={store}><Converter /></Provider>)
  expect(converter).toMatchSnapshot()
});