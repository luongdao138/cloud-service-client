import axios from './axios';

export const getFilters = () => {
  return axios.get('/stats/filters');
};

export const getStats = () => {
  return axios.get('/stats');
};
