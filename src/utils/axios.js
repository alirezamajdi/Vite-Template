import axios from "axios";
import { parseCookies, setCookie } from "nookies";

import { BASE_URL, ACCESS_TOKEN, REFRESH_TOKEN } from "src/constants";
// ----------------------------------------------------------------------
// Use this axios instance to make requests to the backend every where in the app

const axiosInstance = axios.create({ baseURL: BASE_URL });

axiosInstance.interceptors.request.use(
  // Adds the Authorization header to the request if it doesn't exist
  async (config) => {
    if (!config.headers.Authorization) {
      const cookies = parseCookies();
      const token = cookies[ACCESS_TOKEN];
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
      }
    }
    return config;
  },
  // Refreshes the access token if it has expired
  // Remove this part if the project doesn't use refresh tokens
  // Change it based on the project
  async (error) => {
    const cookies = parseCookies();
    const token = cookies[REFRESH_TOKEN];
    if (token) {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const { data } = await axiosInstance.post(
          "/api/v1/users/token/refresh/",
          {
            refresh: token,
          }
        );
        setCookie(null, ACCESS_TOKEN, data?.access, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });
        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${data?.access}`;
        return axiosInstance(originalRequest);
      }
    }
    return Promise.reject(error);
  });

// ----------------------------------------------------------------------

export default axiosInstance;
