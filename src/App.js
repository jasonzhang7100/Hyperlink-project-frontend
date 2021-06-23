import React from 'react';
// eslint-disable-next-line no-unused-vars
import regeneratorRuntime from 'regenerator-runtime';
import { createGlobalStyle } from 'styled-components';

import Login from './components/Login';

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

  }
`;

const App = () => (
  <>
    <GlobalStyle />
    <Login />
  </>

);

export default App;
