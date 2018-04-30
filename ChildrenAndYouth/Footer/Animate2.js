import styled, { keyframes } from 'styled-components';

const k = keyframes`
  from {
    left: -40px;
  }

  to {
    left: 0px;
  }
`;

const Animate2 = styled.span`
  display: block;
  position: absolute;
  top: 0;
  left: -40px;
  right: -40px;
  bottom: 0;
  background: url(https://ocean.org/wp-content/themes/sage/dist/images/ActNow-BG-02_2c1cccdc.png) no-repeat;
  animation: ${k} 18s alternate infinite;
`;

export default Animate2;
