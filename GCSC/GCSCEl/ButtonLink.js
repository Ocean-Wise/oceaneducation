import styled from 'styled-components';

const Button = styled.a`
  color: #005eb8;
  padding: 20px 10px 20px 10px;
  font-weight: 700;
  border: 1px solid #005eb8;
  text-align: center;
  font-size: 22px;
  line-height: 18px;
  appearance: none;
  font-family: 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;
  letter-spacing: 0.6px;
  text-decoration: none;
  display: inline-block;
  width: 300px;
  margin-bottom: 25px;
  transition: all 0.5s cubic-bezier(.61, .03, 1, .59);
  &:hover {
    color: #000;
  }
`;

export default Button;
