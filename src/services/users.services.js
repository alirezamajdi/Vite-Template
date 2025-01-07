// If this is a web3 project and your are using react-query, create service files for each model
// Put all api calls of your projects in these files (like this user service)

import axiosInstance from "src/utils/axios";
import { setCookie, destroyCookie } from "nookies";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "src/constants";

export const loginUser = async (values) => {
  try {
    destroyCookie({}, ACCESS_TOKEN, { path: "/" });
    destroyCookie({}, REFRESH_TOKEN, { path: "/" });
    const { data } = await axiosInstance.post("/api/v1/users/login", values);
    setCookie(null, ACCESS_TOKEN, data?.access, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });
    setCookie(null, REFRESH_TOKEN, data?.refresh, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });
    return data;
  } catch (err) {
    if (!err.response) {
      throw err;
    }
    return err.response.data;
  }
};

export const registerUser = async (values) => {
  try {
    const { data } = await axiosInstance.post("/api/v1/users/register", values);
    return data;
  } catch (err) {
    if (!err.response) {
      throw err;
    }
    return err.response.data;
  }
};

export const getUserInfo = async () => {
  try {
    const { data } = await axiosInstance.get("/api/v1/users/current_user");
    return data;
  } catch (err) {
    if (!err.response) {
      throw err;
    }
    return err.response.data;
  }
};
