import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { color } from './Global';

export const BootLink = styled(NavLink)`
  color: ${color.white};
  
  :hover {
    color: ${color.white};
  }
`;
