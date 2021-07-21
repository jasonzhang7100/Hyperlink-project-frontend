import Admin from '../pages/Admin';
import Booking from '../pages/Booking';
import Home from '../pages/Home';
import Login from '../pages/Login';
import MyBooking from '../pages/MyBooking';

// 不需要登录即可访问的路由
export const commonRoutes = [
  { path: '/login', component: Login },
  { path: '/booking', component: Booking },
  { path: '/', component: Home },
];

// 需要登录访问的路由
export const authRoutes = [
  { path: '/mybooking', component: MyBooking },
  { path: '/admin', component: Admin },
];
