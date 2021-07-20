import jwt from 'jsonwebtoken';

const JWT_TOKEN_NAME = 'jr-hyperlink';
const CLIENT_ID = 'clientId';

export const getToken = () => localStorage.getItem(JWT_TOKEN_NAME);
export const getClientId = () => localStorage.getItem(CLIENT_ID);

export const setToken = (token) => localStorage.setItem(JWT_TOKEN_NAME, token);

export const setClientId = (clientId) => localStorage.setItem(CLIENT_ID, clientId);

export const removeToken = () => localStorage.removeItem(JWT_TOKEN_NAME);
export const removeClientId = () => localStorage.removeItem(CLIENT_ID);

export const isLoggedIn = () => {
  const token = localStorage.getItem(JWT_TOKEN_NAME);
  if (!token) return false;

  const decodedToken = jwt.decode(token);
  const expirationTime = decodedToken.exp * 1000;
  const isExpired = Date.now() - expirationTime > 0;
  return !isExpired;
};
