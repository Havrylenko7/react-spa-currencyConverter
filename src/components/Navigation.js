import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => 
  <Nav justify variant="pills">
    <Nav.Item>
      <Nav.Link eventKey="/1" as={Link} to="/rates" style={{color: "white"}} >Exchange rates</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="/2" as={Link} to="/converter" style={{color: "white"}}>Currency converter</Nav.Link>
    </Nav.Item>
  </Nav>
;

export default Navigation;