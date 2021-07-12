import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import Payment from './Payment';
import PaymentFail from './PaymentFail';
import Confirm from './Confirm';

const Booking = ({ match }) => {
  // 可以这么拿到calendar传过来的date
  const { date } = match.params;
  return (
    <>
      <div>
        三个进度条的圆圈，根据下面不同的路由显示不同进度的圆圈。
        这是calendar传过来的日期，你给子路由的payment传参数可以用路由state的方式，不显示在路径上：
        {date}
      </div>
      <Switch>
        <Route path="/booking/:date/payment" component={Payment} />
        <Route path="/booking/:date/confirm" component={Confirm} />
        <Route path="/booking/:date/paymentfail" component={PaymentFail} />
      </Switch>
    </>
  );
};

Booking.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      date: PropTypes.string,
    }),
  }).isRequired,
};

export default Booking;
