import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Footer from './components/Footer';
import bgImg from '../../assets/images/bgImg.jpeg';

const Main = styled.div`
  overflow: hidden;
  min-height: 100vh;
  background: url(${bgImg}) no-repeat center;
  background-size: cover;
`;

const Layout = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
