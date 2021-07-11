import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header, { OtherHeader } from './components/Header';
import Footer from './components/Footer';
import bgImg from '../../assets/images/bgImg.jpeg';
import otherBgImg from '../../assets/images/otherBgImg.jpg';

const Main = styled.div`
  overflow: hidden;
  min-height: 100vh;
  background: url(${({ img }) => img}) no-repeat center;
  background-size: cover;
`;

const Layout = ({ children, location }) => (
  <>
    {location.pathname === '/' ? (
      <>
        <Header />
        <Main img={bgImg}>{children}</Main>
      </>
    ) : (
      <>
        <OtherHeader />
        <Main img={otherBgImg}>{children}</Main>
      </>
    )}
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default withRouter(Layout);
