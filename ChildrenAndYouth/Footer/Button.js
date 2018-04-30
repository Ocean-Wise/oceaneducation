import styled from 'styled-components';

const Button = styled.a`
  ${(props) => props.donate ? 'padding: 20px 10px 20px 10px' : 'padding: 10px'};
  font-weight: 700;
  border: 1px solid ${(props) => props.donate ? '#fff' : '#7b7e8a'};
  text-align: center;
  ${(props) => props.donate ? 'color: #fff' : 'color: #7b7e8a'};
  margin-left: 15px;
  font-size: 22px;
  line-height: 18px;
  appearance: none;
  font-family: 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;
  letter-spacing: 0.6px;
  text-decoration: none;
  display: inline-block;
  ${(props) => props.donate ? 'width: 300px' : 'width: 150px'};
  transition: all 0.5s cubic-bezier(.61, .03, 1, .59);
  &:hover {
    ${(props) => props.donate ? 'color: #000' : 'color: #fff'};
  }
`;

export default Button;
