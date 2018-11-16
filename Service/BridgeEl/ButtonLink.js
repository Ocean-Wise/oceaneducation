import styled from 'styled-components';

const ButtonLink = styled.a`
  cursor: pointer;
  color: #005eb8;
  padding: 15px;
  font-weight: 700;
  border: 1px solid #005eb8;
  text-align: center;
  font-size: 16px;
  line-height: 12px;
  appearance: none;
  font-family: 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;
  letter-spacing: 0.6px;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 25px;
  transition: all 0.2s cubic-bezier(.61, .03, 1, .59);
  &:hover {
    color: #fff;
    background-color: #005eb8;
  }
`;

export default ButtonLink;
