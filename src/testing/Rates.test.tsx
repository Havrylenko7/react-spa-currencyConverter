import { Provider } from 'react-redux';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { Rates } from '../components';
import store from '../redux/store';

configure({ adapter: new Adapter() });

it('Rates should match a snapshot', () => {
  const rates = shallow(<Provider store={store}><Rates /></Provider>)
  expect(rates).toMatchSnapshot()
});
