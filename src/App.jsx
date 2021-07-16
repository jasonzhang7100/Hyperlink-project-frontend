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
import EditBooking from './pages/EditBooking'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url(${Roboto}) format('truetype');
  }

  @font-face {
    font-family: 'Raleway';
    src: url(${Raleway}) format('truetype');
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
        {/* 能不用exact就不用exact，Home主页的路径短，放最下面可防长路径被它覆盖 */}
        {/* 点击“manage my bookings”后去往login，客户登录成功后去往mybooking，管理者登录成功后去往admin */}
        {/* Home页在calendar上点击日期后去往booking。付款、成功和失败页面作为booking的子路由，写在Booking组件里 */}
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
        <Route path="/mybooking" component={MyBooking} />
        <Route path="/editbooking" component={EditBooking} />
        <Route path="/booking/:date" component={Booking} />
        <Route path="/" component={Home} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
