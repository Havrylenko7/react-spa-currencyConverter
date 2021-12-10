import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { BootNav } from '../styled/Navigation';

const Navigation = () => 
  <Nav justify variant="pills">
    <Nav.Item>
      <BootNav as={Link} to="/rates">Exchange rates</BootNav>
    </Nav.Item>
    <Nav.Item>
      <BootNav as={Link} to="/converter">Currency converter</BootNav>
    </Nav.Item>
  </Nav>
;

export default Navigation;
