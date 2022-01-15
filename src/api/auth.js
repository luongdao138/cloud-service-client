import axios from './axios';

export const signup = (body) => {
  return axios.post('/auth/signup', body);
};

export const login = (body) => {
  return axios.post('/auth/login', body);
};
