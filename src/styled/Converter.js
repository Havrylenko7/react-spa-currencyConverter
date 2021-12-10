import styled from 'styled-components';
import { Card, Form } from 'react-bootstrap';

export const BootCard = styled(Card)`
  height: 300px;
`;

export const BootField = styled(Form.Select)`
  text-transform: uppercase;
  font-size: 18px;
`;

export const CoverOption = styled.option`
  display: none;
`;

export const BootForm = styled(Form.Control)`
  font-size: 18px;
`;

export const BootBody = styled(Card.Body)`
  text-align: center;
  font-size: 26px;
`;
