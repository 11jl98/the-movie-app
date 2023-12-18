import { http } from "../../configs/api.config";

const getVideos = async (movieId: number) => {
  const response = await http.get(`/movie/${movieId}/videos?language=pt-BR`);
  return response.data;
};

const getDetail = async (movieId: number) => {
  const response = await http.get(`/movie/${movieId}?language=pt-BR`);
  return response.data;
};

export { getDetail, getVideos };
