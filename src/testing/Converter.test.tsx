import { Provider } from 'react-redux';
import { shallow, configure, ShallowWrapper } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Converter from '../components/Converter';
import store from '../redux/store';

configure({ adapter: new Adapter() });

const converter = () => shallow(<Provider store={store}><Converter /></Provider>);

describe('Converter', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = converter();
  });

  it('should match a snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
