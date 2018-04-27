import styled from 'styled-components';
import NormalMenuItem from 'material-ui/MenuItem';

const MenuItem = styled(NormalMenuItem)`
  margin-top: 100px !important;
  font-size: 72px !important;
  font-weight: 700 !important;
  @media all and (max-width: 812px) {
    font-size: 34px !important;
    margin-top: 50px !important;

  }
  &:hover {
    color: #00a78f !important;
  }
  @media all and (min-width: 813px) {
    margin-left: 15px !important;
  }
`;

export default MenuItem;
