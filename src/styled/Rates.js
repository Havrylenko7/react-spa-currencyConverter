import styled from 'styled-components';
import { ListGroup, Form, Card } from 'react-bootstrap';

import { color } from './Global';

export const BootItem = styled(ListGroup.Item)`
  display: flex;
  justify-content: space-between;
`;

export const BootControl = styled(Form.Control)`
  font-size: 20px;
`;

export const BootCard = styled(Card)`
  height: 100%;
  font-size: 18px;
  text-transform: uppercase;
`;

export const BootButton = styled.input`  
  :checked {
    display: none;
  }  
`;

export const BootListGroup = styled(ListGroup)`  
  height: 350px;
  overflow-y: auto;
  margin: 0.5% 0;

  ::-webkit-scrollbar {
    width: 10px;
    background-color: ${color.altGrey};
  }

  ::-webkit-scrollbar-track {
    background-color: ${color.altGrey};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${color.grey};
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: ${color.dimGrey}; 
  }
`;

export const BootSelect = styled(Form.Select)`
  color: black;
  text-transform: uppercase;
  margin: 0.5% 0;  
  font-size: 18px;

  ::-webkit-scrollbar {
    width: 10px;
    background-color: ${color.altGrey};
  }

  ::-webkit-scrollbar-track {
    background-color: ${color.altGrey};
  }

  ::-webkit-scrollbar-thumb {
    background-color:  ${color.grey};
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: ${color.dimGrey}; 
  }
`;
