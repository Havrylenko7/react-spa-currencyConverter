import { Nav } from 'react-bootstrap';

import { BootLink } from  '../styled/Navigation';

const Navigation: React.FC = () => (
  <Nav justify variant="pills">
    <Nav.Item>
      <Nav.Link as={BootLink} to="/rates" activeClassName="active">
        Rates
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link as={BootLink} to="/converter" activeClassName="active">
        Convert
      </Nav.Link>
    </Nav.Item>
  </Nav>
);

export default Navigation;
