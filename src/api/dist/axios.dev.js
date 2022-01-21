"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var instance = _axios["default"].create({
  // baseURL: 'http://localhost:5000/api/v1',
  baseURL: 'https://luong-cloud-service.herokuapp.com/api/v1'
});

instance.interceptors.request.use(function (config) {
  if (localStorage.getItem('cloud_token')) config.headers['Authorization'] = "Bearer ".concat(localStorage.getItem('cloud_token'));
  return config;
});
instance.interceptors.response.use(function (res) {
  return res.data;
}, function (error) {
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
});
var _default = instance;
exports["default"] = _default;