import styled from 'styled-components';


const Container = styled.div`
  height: ${props => props.height}px;
  overflow-y: hidden;
  display: inline-block;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: bottom;
  width: 100%;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: ${props => props.height}px;
    display: inline-block;
    background: -moz-linear-gradient(top, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.35) 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0,0,0,0.35)), color-stop(100%, rgba(0,0,0,0.1)));
    background: -webkit-linear-gradient(top, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.35) 100%);
    background: -o-linear-gradient(top, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.35) 100%);
    background: -ms-linear-gradient(top, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.35) 100%);
    background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.35) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr="#00000000", GradientType=0 );
  }
`;

export default Container;
