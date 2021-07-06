import React from 'react';
import styled from 'styled-components';
import LogoPic from '../../assets/owl.png';

const Wrapper = styled.div`
height: 118px;
margin: 0 0 85px;
background-color: #181b50;
`;
const HeaderBarLogo = styled.div`
margin:0 auto;
width:105px;
height:118px;
background-image:url(${LogoPic});
background-repeat:no-repeat;
background-size:100%;
`;

const BookingHeaderBar = () => (
  <Wrapper>
    <HeaderBarLogo />
  </Wrapper>
);

export default BookingHeaderBar;
