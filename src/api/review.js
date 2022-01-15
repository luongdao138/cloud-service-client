import axios from './axios';

export const addNewReview = (body) => {
  return axios.post('/reviews', body);
};

export const getReviewsOfUser = (params) => {
  return axios.get('/reviews', { params });
};

export const deleteReview = (id) => {
  return axios.delete(`/reviews/${id}`);
};

export const getReview = (id) => {
  return axios.get(`/reviews/${id}`);
};

export const updateReview = ({ id, ...rest }) => {
  return axios.put(`/reviews/${id}`, rest);
};
