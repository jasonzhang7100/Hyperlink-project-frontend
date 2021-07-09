import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Routes from './components/Routes';
import Header from './components/Header';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #cacaca;
  }
  * {
    box-sizing: border-box;
  }
`;

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Routes />
    <Footer />
  </>
);

export default App;
