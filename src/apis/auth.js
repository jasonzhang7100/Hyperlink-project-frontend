import { post } from './axios';

const API_LOGIN_URL = '/login';

export const loginUser = (email, password) => {
  const data = {
    email,
    password,
  };
  return post(API_LOGIN_URL, data).then((res) => res.data);
};

export const signUp = (data) => {
  console.log(data);
};
