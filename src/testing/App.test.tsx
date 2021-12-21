import React from 'react';
import { Provider } from 'react-redux';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import App from '../App';
import store from '../redux/store';

configure({ adapter: new Adapter() });

it('App renders correctly', () => {
  const app = shallow(<Provider store={store}><App /></Provider>)
  expect(app).toMatchSnapshot()
});