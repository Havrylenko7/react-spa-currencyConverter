import { Provider } from 'react-redux';
import { shallow, configure, ShallowWrapper } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Navigation from '../components/Navigation';
import store from '../redux/store';

configure({ adapter: new Adapter() });

const navigation = () => shallow(<Provider store={store}><Navigation /></Provider>);

describe('Navigation', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = navigation();
  });

  it('should match a snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
