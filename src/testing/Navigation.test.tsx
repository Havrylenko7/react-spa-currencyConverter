import { Provider } from 'react-redux';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { Navigation } from '../components';
import store from '../redux/store';

configure({ adapter: new Adapter() });

it('Navigation renders correctly', () => {
  const navigation = shallow(<Provider store={store}><Navigation /></Provider>)
  expect(navigation).toMatchSnapshot()
});
