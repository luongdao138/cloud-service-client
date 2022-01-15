import axios from './axios';

export const getProvinces = () => {
  return axios.get('/location/provinces');
};

export const getDistricts = (province_id) => {
  return axios.get('/location/districts', { params: { province_id } });
};

export const getWards = (district_id) => {
  return axios.get('/location/wards', { params: { district_id } });
};
