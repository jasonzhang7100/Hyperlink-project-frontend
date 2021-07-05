import React from 'react';
import styled from 'styled-components';

const ButtonTotDate = styled.div`
width: 217px;
height: 26px;
margin: 75px 22px 107px 391px;
font-family:Arial, Helvetica, sans-serif;
font-size: 16px;
font-weight: 500;
font-stretch: normal;
font-style: normal;
line-height: 1.63;
letter-spacing: 0.46px;
text-align: left;
color: #818181;
&:hover{
    color:red;
    cursor: pointer;
}
`;
const ButtonLeft = styled.span`
font-size:24px`;

const ButtonSelectDate = () => (
  <ButtonTotDate>
    {' '}
    <ButtonLeft>← </ButtonLeft>
    SELECT DATE
    {' '}
  </ButtonTotDate>
);
export default ButtonSelectDate;
