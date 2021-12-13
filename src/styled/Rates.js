import styled from 'styled-components';
import { ListGroup, Form, Card } from 'react-bootstrap';

export const BootItem = styled(ListGroup.Item)`
  text-transform: uppercase;
`;

export const BootControl = styled(Form.Control)`
  text-transform: uppercase;
`;

export const BootCard = styled(Card)`
  height: 100%;
`;

export const BootButton = styled.input`  
  :checked {
    display: none;
  }
`;
