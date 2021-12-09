import styled from 'styled-components';
import { Nav } from 'react-bootstrap';
import { color } from './Global';

export const BootNav = styled(Nav)`
  color: ${color.white};
  text-decoration: none;
  
  :hover {
    color: ${color.white};
  }
`;
