import axios from 'axios';
import { getToken } from '../utils/authentication';

axios.defaults.baseURL = 'http://localhost:3000/api';

const appendAuthToken = (config) => {
  const jwtToken = getToken();
  const Authorization = jwtToken && `Bearer ${jwtToken}`;
  console.log(Authorization);
  return { ...config, headers: { Authorization, ...config.header } };
};

export const post = (url, data, config = {}) => {
  return axios.post(url, data, appendAuthToken(config));
};

export const get = (url, config = {}) => {
  return axios.get(url,appendAuthToken(config));
}
