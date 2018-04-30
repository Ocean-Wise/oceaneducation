import styled from 'styled-components';

const MenuHeader = styled.p`
  ${(props) => props.pad ? 'margin-top: 100px !important' : ''};
  font-weight: 700 !important;
  margin-left: 15px !important;
  color: white;
`;

export default MenuHeader;
