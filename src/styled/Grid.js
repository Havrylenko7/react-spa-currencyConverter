import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  font-size: 18px;
  font-family: Fantasy;
  max-height: 100%;
  grid-gap: 20px;
  padding: 20px;
  margin: 7.5% 25%;
  border-radius: 10px;
  background-color: #263270;
  box-shadow: 0px 10px 25px 000;
    @media (max-width: 850px) {
      margin: 5% 20%;
    }
    @media (max-width: 550px) {
      margin: 2.5% 15%;
  }
`;

export default Grid;