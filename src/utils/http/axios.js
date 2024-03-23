import axios from 'axios';
import { getCookie } from '@/helpers/getCookie';

const http = axios.create({
    baseURL: import.meta.env.VUE_APP_BASE_URL,
});

// Add a request interceptor
http.interceptors.request.use(
  config => {
    const authToken = getCookie('authToken');
    // If the authentication token exists, add it to the Authorization header
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }

    return config;
  },
  error => {
    // Handle request errors
    return Promise.reject(error);
  }
);

export default http;
