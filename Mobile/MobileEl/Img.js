import styled from 'styled-components';
import * as mixins from '../styles/mixins';

const Img = styled.img`
  width: 100%;
  margin: 0 auto;
  display: block;
  ${mixins.bp.lg.min`
    position: relative;
    bottom: 387px;
  `}
  ${mixins.bp.xl.min`
    position: relative;
    bottom: 800px;
  `}
`;

export default Img;
