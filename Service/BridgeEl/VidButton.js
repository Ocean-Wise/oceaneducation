import styled from 'styled-components';

const Button = styled.button`
  z-index: 500;
  cursor: pointer;
  display: inline-block;
  box-sizing: border-box;
  border-radius: 44px;
  border: 1px solid #fff;
  background: rgba(0,0,0,.4);
  text-align: center;
  transition: all .3s ease-out;
  height: 50px;
  width: 50px;
  position: absolute;
  left: 50%;
  top: 30%;
  @media all and (max-width: 768px) {
    left: 45%;
  }
`;

export default Button;
