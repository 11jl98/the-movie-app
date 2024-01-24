import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { AxiosInstance, AxiosRequestHeaders } from "axios";
import { clearCookies } from "../utils/session.utils";

export const http: AxiosInstance = axios.create({
  baseURL: process.env.BASE_URL_API,
});

http.interceptors.request.use(async function (config: AxiosRequestHeaders) {
  try {
    const currentRoute = config.url;

    const routesWithCookie = ["/auth/create-session", "/register"];
    if (!routesWithCookie.includes(currentRoute)) {
      const cookies = await AsyncStorage.getItem(
        process.env.NAME_COOKIE as string
      );
      console.log(cookies);
      if (cookies)
        config.headers = {
          ...config.headers,
          Cookie: cookies,
        };
    }

    return config;
  } catch (error) {
    console.log(error);
  }
});
