import { http } from "../../configs/api.config";
import { MovieType } from "../../pages/Home/types";

export const getMovie = async () => {
  const response = await http.get<MovieType>(`/movie`);
  return response.data;
};