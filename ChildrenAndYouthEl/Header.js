import styled from 'styled-components';

const Header = styled.div`
  position: absolute;
  top: calc(100vw/5);
  width: auto;
  left: calc(50% - 320px/2);
  margin: auto;
  @media all and (min-width: 912px) {
    top: 200px;
  }
  @media all and (max-width: 468px) {
    left: calc(50% - 228.69px/2);
  }
`;

export default Header;
