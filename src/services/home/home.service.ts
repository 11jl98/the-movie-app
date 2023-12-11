import { http } from "../../configs/api.config";

const getOriginals = async () => {
  const response = await http.get(
    `/discover/tv?language=pt-BR&sort_by=popularity.desc&with_networks=213`
  );
  return response.data;
};

const getForYou = async () => {
  const response = await http.get(`/trending/all/week?language=pt-BR`);
  return response.data;
};

const getTopRated = async () => {
  const response = await http.get(`/movie/top_rated?language=pt-BR`);
  return response.data;
};

const getAction = async () => {
  const response = await http.get(
    `/discover/movie?language=pt-BR&with_genres=28`
  );
  return response.data;
};

const getComedy = async () => {
  const response = await http.get(
    `/discover/movie?language=pt-BR&with_genres=35`
  );
  return response.data;
};

const getHorror = async () => {
  const response = await http.get(
    `/discover/movie?language=pt-BR&with_genres=27`
  );
  return response.data;
};

const getRomance = async () => {
  const response = await http.get(
    `/discover/movie?language=pt-BR&with_genres=10749`
  );
  return response.data;
};

const getDocumentry = async () => {
  const response = await http.get(
    `/discover/movie?language=pt-BR&with_genres=99`
  );
  return response.data;
};

export {
  getOriginals,
  getForYou,
  getTopRated,
  getAction,
  getComedy,
  getHorror,
  getRomance,
  getDocumentry,
};
