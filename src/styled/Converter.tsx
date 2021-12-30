import styled from 'styled-components';
import { Card, Form } from 'react-bootstrap';

import { color } from './Global';

export const BootCard = styled(Card)`
  height: 100%;
`;

export const BootField = styled(Form.Select)`
  text-transform: uppercase;
  font-size: 18px;
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

export const CoverOption = styled.option`
  display: none;
`;

export const BootForm = styled(Form.Control)`
  font-size: 18px;
  margin: 0.5% 0;
`;

export const BootBody = styled(Card.Body)`
  text-align: center;
  font-size: 24px;
`;
