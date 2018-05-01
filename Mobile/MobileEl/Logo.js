import styled from 'styled-components';

const Logo = styled.img`
  display: inline-block;
  width: 157px;
  height: 60px;
  position: absolute;
  top: 15px;
  left: 20px;
  @media all and (max-width: 812px) {
    top: 15px;
    left: -27px;
  }
`;

export default Logo;
