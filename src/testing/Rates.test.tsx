import { Provider } from 'react-redux';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Rates from '../components/Rates';
import store from '../redux/store';

configure({ adapter: new Adapter() });

const rates = () => shallow(<Provider store={store}><Rates /></Provider>);

describe('Rates', () => {
  let component: any;

  beforeEach(() => {
    component = rates();
  });

  it('should match a snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
