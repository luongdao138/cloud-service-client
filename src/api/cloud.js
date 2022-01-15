import axios from './axios';

export const getClouds = (params) => {
  return axios.get('/clouds', { params });
};

export const getCloudDetail = (cloudId) => {
  return axios.get(`/clouds/${cloudId}`);
};

export const getCloudReviews = (cloudId, params) => {
  return axios.get(`/clouds/${cloudId}/reviews`, { params });
};
