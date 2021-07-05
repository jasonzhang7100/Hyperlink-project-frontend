import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../../pages/Login';
import Home from '../../pages/Home';
import Admin from '../../pages/Admin';
import MyBooking from '../../pages/Home/MyBooking';
import SuccessMsg from '../SuccessMsg';
import {
  LOGIN_URL,
  CLIENT_HOME_URL,
  ADMIN_HOME_URL,
  CLIENT_MY_BOOKING_URL,
  SUCCESS_URL,
} from './URLMap';

const Routes = () => (
  <>
    <Switch>
      <Route exact path={LOGIN_URL} component={Login} />
      <Route exact path={ADMIN_HOME_URL} component={Admin} />
      <Route exact path={SUCCESS_URL} component={SuccessMsg} />
      <Route exact path={CLIENT_HOME_URL} component={Home} />
      <Route exact path={CLIENT_MY_BOOKING_URL} component={MyBooking} />
    </Switch>
  </>
);

export default Routes;
