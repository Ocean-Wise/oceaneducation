import styled from 'styled-components';

const Header = styled.div`
  position: absolute;
  top: calc(100vw/5);
  width: auto;
  margin: auto;
  @media all and (min-width: 912px) {
    top: 200px;
  }
  @media all and (min-width: 600px) {
    left: calc(50% - 575.7px/2);
  }
  left: calc(50% - 246.73px/2);
  z-index: 5;
`;

export default Header;
