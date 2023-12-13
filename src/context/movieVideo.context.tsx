import { createContext } from "react";
import movieVideo from "./hooks/movieVideo.hook";

const DEFAULT_VALUE = {
  getMovieVideo: async (movieId: number) => {},
  video: {} as any,
};

const ContextVideo = createContext(DEFAULT_VALUE);

function VideoProvider({ children }: any) {
  const { getMovieVideo, video } = movieVideo();
  return (
    <ContextVideo.Provider
      value={{
        getMovieVideo,
        video,
      }}
    >
      {children}
    </ContextVideo.Provider>
  );
}

export { ContextVideo, VideoProvider };
