import styled from 'styled-components';

const Container = styled.div`
  margin-top: 57px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  span {
    width: 350px;
    padding: 0 15px;
    &:first-of-type {
      padding: 0 15px 0 0;
    }
    &:last-of-type {
      padding: 0;
    }
  }
  img {
    width: 350px;
    height: 200px;
  }
  @media all and (max-width: 1125px) {
    span:last-of-type {
      padding: 0 0 0 15px;
    }
  }

  @media all and (max-width: 1020px) {
    span {
      width: 330px;
      &:nth-of-type(odd) {
        padding: 0 15px 0 0;
      }
      &:nth-of-type(even) {
        padding: 0 0 0 15px;
      }
    }
    img {
      width: 330px;
      height: 189px;
    }
  }

  @media all and (max-width: 768px) {
    span {
      width: 90%;
      padding: 15px !important;
    }
    img {
      width: 100%;
      height: auto;
    }
  }
`;

export default Container;
