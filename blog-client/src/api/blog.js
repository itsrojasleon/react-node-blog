import axios from 'axios';

let url;

if (process.env.NODE_ENV === 'production') {
  url = 'https://react-node-blog-api.herokuapp.com';
} else {
  url = 'http://localhost:5000';
}

const instance = axios.create({
  baseURL: url
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
