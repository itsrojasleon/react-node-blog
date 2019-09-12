import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000'
});

instance.interceptors.request.use(
  async config => {
    const token = await window.localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

export default instance;
