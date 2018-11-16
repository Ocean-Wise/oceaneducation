import styled from 'styled-components';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  margin-bottom: calc(50px - 15px);
  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  img {
    width: 255px;
    height: 120px;
    margin: 15px 0;
    filter: contrast(5%);
  }
`;

export default Grid;
