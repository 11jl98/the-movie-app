import { genresList } from "../commons/genres.commons";

export function getGenres(movie: any) {
  let genresMovie = [];
  for (let genreId of movie?.genre_ids) {
    const findGenre = genresList.find((item) => item.id === Number(genreId));
    if (findGenre) genresMovie.push(findGenre);
  }
  return genresMovie;
}
