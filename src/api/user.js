import axios from './axios';

export const getUser = (params) => {
  return axios.get('/users/getUser', { params });
};

export const updateUser = ({ _id, ...rest }) => {
  return axios.put(`/users/${_id}`, rest);
};

export const uploadUserImage = ({ id, data }) => {
  return axios.put(`/users/${id}/image`, data);
};
