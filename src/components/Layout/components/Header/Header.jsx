import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import LogoImg from '../../../../assets/images/logo.png';

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: ${({ height }) => height}rem;
  background-color: rgb(24, 28, 77);
  text-align: center;
`;

const Logo = styled.img`
  position: absolute;
  top: 0.3rem;
  left: 10rem;
  width: 10.5rem;
`;

const OtherLogo = styled.img`
  width: 6.7rem;
`;

const HeaderTitle = styled.h1`
  margin-top: 5rem;
  color: #fff;
  font: bold 1.8rem 'Baloo';
  letter-spacing: 0.1rem;
`;

const HeaderButton = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 23rem;
  border: none;
  background-color: rgb(24, 28, 77);
  color: #fff;
  font: 500 0.8rem 'Arial';
  letter-spacing: 0.08rem;
  &:hover {
    cursor: pointer;
    color: #818181;
  }
`;

const Header = (props) => (
  <Container height={12}>
    <Logo src={LogoImg} alt="Logo" />
    <HeaderTitle>WELCOME TO JAPANESE BATH HOUSE</HeaderTitle>
    <HeaderButton
      onClick={() => {
        props.history.push('/login');
      }}
    >
      MANAGE MY BOOKING
      {' '}
      {'>'}
    </HeaderButton>
  </Container>
);

Header.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export const OtherHeader = () => (
  <Container height={7.5}>
    <OtherLogo src={LogoImg} alt="Logo" />
  </Container>
);

export default withRouter(Header);
