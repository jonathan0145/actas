import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/';

export const getToken = () => localStorage.getItem('token');

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});