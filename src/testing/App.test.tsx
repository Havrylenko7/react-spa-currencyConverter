import { Provider } from 'react-redux';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import App from '../App';
import store from '../redux/store';

configure({ adapter: new Adapter() });

const app = () => shallow(<Provider store={store}><App /></Provider>);

describe('App', () => {
  let component: any;
  
  beforeEach(() => {
    component = app();
  });

  it('should match a snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
