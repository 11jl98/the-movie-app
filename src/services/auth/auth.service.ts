import { http } from "../../configs/api.config";
import { Session } from "../../pages/Login/types";

export const singIn = async (email: string, password: string) => {
  const response = await http.post<Session>(`/auth/create-session`, {
    email,
    password,
  });
  return response.data;
};

export const register = async (email: string, password: string) => {
  await http.post<void>(`/auth/register`, {
    email,
    password,
  });
};
