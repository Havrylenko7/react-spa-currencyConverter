import styled from 'styled-components';

import { color, media } from './Global';

export const Grid = styled.div`
  display: grid;
  font-size: 18px;
  font-family: Fantasy;
  max-height: 100%;
  grid-gap: 20px;
  padding: 20px;
  margin: 7.5% 30%;
  border-radius: 10px;
  background-color: ${color.blue};
  box-shadow: 0 10px 25px ${color.black};
  
    @media (max-width: ${media.tabletWidth}) {
      margin: 5% 20%;
    }
    @media (max-width: ${media.phoneWidth}) {
      margin: 2.5% 15%;
  }
`;

export const Loader = styled.div`  
  font-size: 26px;
  text-align: center;
  font-family: Fantasy;
`;
