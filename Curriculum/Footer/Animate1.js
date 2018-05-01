import styled, { keyframes } from 'styled-components';

const k = keyframes`
  from {
    left: 0px;
  }

  to {
    left: -40px;
  }
`;

const Animate1 = styled.span`
  display: block;
  position: absolute;
  top: 0;
  left: 0px;
  right: -40px;
  bottom: 0;
  background: url(https://ocean.org/wp-content/themes/sage/dist/images/ActNow-BG-01_dfdd06a8.png) no-repeat;
  animation: ${k} 18s alternate infinite;
`;

export default Animate1;
