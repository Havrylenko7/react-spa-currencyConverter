import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ListGroup, Nav, Card } from 'react-bootstrap';


function App() {

  const Grid = styled.div`
  display: grid;
  max-height: 100%;
  grid-gap: 20px;
  padding: 20px;
  margin: 7.5% 25%;
  border-radius: 10px;
  background-color: #263270;
  @media (max-width: 850px) {
    margin: 5% 20%;
  }
  @media (max-width: 550px) {
    margin: 2.5% 15%;
  }
  `;

  return (
    <Grid>
      <Nav justify variant="pills" defaultActiveKey="/rates">
        <Nav.Item>
          <Nav.Link eventKey="/rates" style={{color: "white"}}>Exchange rates</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/" style={{color: "white"}}>Currency converter</Nav.Link>
        </Nav.Item>
      </Nav>
      <ListGroup>
        <ListGroup.Item variant="primary">Rates</ListGroup.Item>
        <ListGroup.Item variant="light">Rates</ListGroup.Item>
        <ListGroup.Item variant="primary">Rates</ListGroup.Item>
        <ListGroup.Item variant="light">Rates</ListGroup.Item>
        <ListGroup.Item variant="primary">Rates</ListGroup.Item>
        <ListGroup.Item variant="light">Rates</ListGroup.Item>
      </ListGroup>
      <Card style={{height: "200px"}}>
        Currency converter (Formik)
      </Card>
    </Grid>
  );
}

export default App;