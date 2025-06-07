import Axios, { type InternalAxiosRequestConfig } from 'axios';
// import { env } from '@/config/env';

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  if (config.headers) {
    config.headers.Accept = "application/json";
  }

  config.withCredentials = true;
  return config;
}

// Create an Axios instance with the base URL 
export const api = Axios.create({
  baseURL: "",
});

// Create Axios request and response interceptors

api.interceptors.request.use(authRequestInterceptor);

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  // Handle global errors by using a notification system and handle retries for 401 errors
  (error) => {
    const message = error.response?.data?.message || error.message;
    // useNotifications.getState().addNotification({
    //   type: 'error',
    //   title: 'Error',
    //   message,
    // });
    console.error('API Error:', message);
    // if (error.response?.status === 401) {
    //   const searchParams = new URLSearchParams();
    //   const redirectTo =
    //     searchParams.get('redirectTo') || window.location.pathname;
    //   window.location.href = paths.auth.login.getHref(redirectTo);
    // }

    return Promise.reject(error);
  },
);