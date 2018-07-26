import styled from 'styled-components';
import * as mixins from '../styles/mixins';

const Thumbnail = styled.div`
  cursor: pointer;
  position: relative;
  button {
    position: absolute;
    top: 92px;
    left: 155px;
  }
  ${mixins.bp.md.max`
    #thumb {
      height: 128px;
    }
    button {
      top: 42px;
      left: 85px;
    }
  `}
  ${mixins.bp.xs.max`
    #thumb {
      height: unset;
    }
    button {
      top: 80px;
      left: 145px;
    }
  `}
`;

export default Thumbnail;
