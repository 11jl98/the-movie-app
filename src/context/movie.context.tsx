import { createContext } from "react";
import Movie from "./hooks/movie.hook";

const DEFAULT_VALUE = {
  getMovieVideo: async (movieId: number) => {},
  video: {} as any,
  getDetailMovie: async (movieId: number) => {},
  movie: {} as any,
  loading: true,
};

const ContextMovie = createContext(DEFAULT_VALUE);

function MovieProvider({ children }: any) {
  const { getMovieVideo, video, getDetailMovie, movie, loading } = Movie();
  return (
    <ContextMovie.Provider
      value={{
        getMovieVideo,
        video,
        getDetailMovie,
        movie,
        loading,
      }}
    >
      {children}
    </ContextMovie.Provider>
  );
}

export { ContextMovie, MovieProvider };
