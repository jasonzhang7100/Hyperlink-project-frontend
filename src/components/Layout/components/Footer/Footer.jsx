import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  padding-bottom:2rem;
  padding-top: 2rem;
  padding-left: 10%;
  padding-right:10%;
  background-color: rgb(24, 28, 77);
  color: #fff;
  word-wrap: break-word;
`;

const FooterTitle = styled.h1`
  font: bold 1.5rem 'Baloo';
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  width: 80%;
`;

const ContentItem = styled.span``;

const FooterInstruction = styled.p`
  margin: 0.2rem 0;
`;

const Footer = () => (
  <Container>
    <FooterTitle>Opening Hours</FooterTitle>
    <FooterContent>
      <ContentItem>Friday 2pm-9pm</ContentItem>
      <ContentItem>Saturday Midday-9pm</ContentItem>
      <ContentItem>Sunday 11am-6pm*</ContentItem>
      <ContentItem>Monday 11am-6pm**</ContentItem>
    </FooterContent>
    <FooterInstruction>
      * On long weekends the bath house will open from 12 noon – 9 pm on Sunday.
      (Last entry: Day visit guests 7pm for in-house 8.15pm)
    </FooterInstruction>
    <FooterInstruction>
      ** Available on selected long weekends only. (Last entry 4pm)
      {' '}
    </FooterInstruction>
  </Container>
);

export default Footer;
