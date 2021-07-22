import axios from 'axios';
import { getToken } from '../utils/authentication';

axios.defaults.baseURL = 'http://localhost:3000/api';

const appendAuthToken = (config) => {
  const jwtToken = getToken();
  const Authorization = jwtToken && `Bearer ${jwtToken}`;
  return { ...config, headers: { Authorization, ...config.header } };
};

export const post = (url, data, config = {}) => axios.post(url, data, appendAuthToken(config));

export const get = (url, config = {}) => axios.get(url, appendAuthToken(config));
