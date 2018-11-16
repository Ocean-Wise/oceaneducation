import styled from 'styled-components';

const Blockquote = styled.blockquote`
  font-size: 1.4em;
  font-family: 'Helvetica Neue', helvetica, arial, sans-serif;
  font-style: italic;
  color: #8D8D8D;
  margin: 10px 0;
  padding: 90px 355px 64px;
  line-height: 1.6;
  position: relative;
  background-color: #F2F5FA;
  &::before {
    content: "\\201F";
    color: #78C0A8;
    font-size: 7em;
    position: absolute;
    left: 337px;
    top: -30px;
  }
  &::after {
    content: '';
  }
  span {
    display: block;
    color: #4D4D4D;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;
    margin-top: 1em;
    text-align: right;
    &::before {
      content: "\\2014 ";
    }
  }
  @media all and (max-width: 1125px) {
    padding: 90px 39px 64px;
    &::before {
      left: 22px;
    }
  }
  @media all and (max-width: 768px) {
    padding: 90px 15px 64px;
    &::before {
      left: 50%;
      width: 10px;
      margin-left: -45px;
    }
  }
`;

export default Blockquote;
