import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export const http: AxiosInstance = axios.create({
  baseURL: process.env.BASE_URL_API,
});

http.interceptors.request.use(async function (config: AxiosRequestConfig) {
  try {
    const token = process.env.AUTH_TMDB;
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
        accept: "application/json",
      };
    }
    return config;
  } catch (error) {
    console.log(error);
  }
});
