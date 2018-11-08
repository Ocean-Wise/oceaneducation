import styled from 'styled-components';
import * as mixins from '../styles/mixins';

const Img = styled.img`
  width: 100%;
  margin: 0 auto;
  display: block;
  ${mixins.bp.lg.min`
    position: relative;
    bottom: 200px;
  `}
  ${mixins.bp.xl.min`
    position: relative;
    bottom: 430px;
  `}
`;

export default Img;
