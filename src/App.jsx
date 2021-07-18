import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Booking from './pages/Booking';
import MyBooking from './pages/MyBooking';
import Roboto from './assets/fonts/Roboto/Roboto-Regular.ttf';
import Raleway from './assets/fonts/Raleway/Raleway-VariableFont_wght.ttf';
import Baloo from './assets/fonts/Baloo/Baloo2-Bold.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url(${Roboto}) format('truetype');
  }

  @font-face {
    font-family: 'Raleway';
    src: url(${Raleway}) format('truetype');
  }

  @font-face {
    font-family: 'Baloo';
    src: url(${Baloo}) format('truetype');
  }

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
  <BrowserRouter>
    <GlobalStyle />
    <Layout>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
        <Route path="/mybooking" component={MyBooking} />
        <Route path="/booking" component={Booking} />
        <Route path="/" component={Home} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
