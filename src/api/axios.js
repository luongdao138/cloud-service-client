import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://localhost:5000/api/v1',
  baseURL: 'https://luong-cloud-service.herokuapp.com/api/v1',
});

instance.interceptors.request.use((config) => {
  if (localStorage.getItem('cloud_token'))
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('cloud_token')}`;

  return config;
});

instance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        localStorage.removeItem('cloud_token');
        return Promise.reject(error.response);
      } else {
        return Promise.reject(new Error(error.response.data.msg));
      }
    } else if (error.request) {
      return Promise.reject(new Error('There was an error while making request!'));
    } else {
      return Promise.reject(new Error('There was something wrong! Try again later!'));
    }
  }
);

export default instance;
