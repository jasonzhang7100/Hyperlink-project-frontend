import React from 'react';
import styled from 'styled-components';

const FooterBar = styled.div`
height: 150px;
padding: 49px 489px 76px 130px;
background-color: rgb(24, 28, 77);
color: white;`;

const FooterTitle = styled.div`
width: 164px;
height: 38px;
margin: 0 657px 0 0;
font-family: Baloo;
font-size: 24px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
text-align: left;
color: #ffffff;
`;

const FooterContent = styled.div`
width: 1000px;
    height: 83px;
    margin: 18px 0 0;
    font-family:Arial, Helvetica, sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.17;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;`;

const FootAvaliableDate = styled.div`
display: inline;
width:200px;
margin-right:10px;`;

const Footer = () => (
  <FooterBar>
    <FooterTitle>Opening Hours</FooterTitle>
    <FooterContent>
      <FootAvaliableDate>Friday 2pm-9pm</FootAvaliableDate>
      <FootAvaliableDate>Saturday Midday-9pm</FootAvaliableDate>
      <FootAvaliableDate>Sunday 11am-6pm</FootAvaliableDate>
      <FootAvaliableDate>Monday 11am-6pm**</FootAvaliableDate>
      <p>
        *On long weekends the bath house will open from 12 noon – 9 pm on Sunday.
        (Last entry: Day visit guests
        7pm for in-house 8.15pm)
      </p>
      <p>** Available on selected long weekends only. (Last entry 4pm) </p>
    </FooterContent>
  </FooterBar>
);

export default Footer;
