import React from 'react';
import styled from 'styled-components';
import LogoPic from '../../assets/owl.png';

const HeaderBar = styled.div`
height: 202px;
background-color: rgb(24, 28, 77);
color: white;`;

const HeaderContent = styled.div`
position:relative;
display: flex;
justify-content: center;`;

const HeaderLogo = styled.div`
width: 180px;
height: 202px;
background-image: url(${LogoPic});
background-repeat:no-repeat;

background-size:100%;
margin: 0 0 0 0;`;

const HeaderTitle = styled.div`
width: 613px;
height: 26px;
margin: 98px 5px 32px 83px;
font-family: Baloo;
font-size: 36px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: 0.72;
letter-spacing: 0.46px;
text-align: left;
color: #ffffff;`;

const BookLink = styled.div`
width: 200px;
    height: 26px;
    flex-grow: 0;
    font-family:Arial, Helvetica, sans-serif;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: 0.46px;
    text-align: right;
    color: #ffffff;
    position:absolute;
    bottom:10px;
    right:100px;
    background-color:rgb(24, 28, 77);
    &:hover{
        cursor: pointer;
        color:#ff2e2e;
    }`;

const Header = () => (
  <div>
    <HeaderBar>
      <HeaderContent>
        <HeaderLogo />
        <HeaderTitle>Welcome to Japanese bath house</HeaderTitle>
        <BookLink>Manage My Booking →</BookLink>
      </HeaderContent>
    </HeaderBar>
  </div>
);

export default Header;
