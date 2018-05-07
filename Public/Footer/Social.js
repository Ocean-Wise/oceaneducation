import styled from 'styled-components';

const Social = styled.div`
  display: inline-flex;
  flex-direction: row;
  @media all and (max-width: 768px) {
    flex-direction: column;
  }
  justify-content: center;
  overflow: hidden;
  width: 100%;
  position: relative;
  padding-top: 125px;
  padding-bottom: 125px;
  background: linear-gradient(#33ffe6, #00a18d);
`;

export default Social;
