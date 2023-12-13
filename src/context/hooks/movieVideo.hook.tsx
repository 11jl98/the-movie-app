import { useState } from "react";
import { getVideos } from "../../services/moviesVideos/moviesVideos.service";
import { useNavigation } from "@react-navigation/native";

export default function MovieVideo() {
  const [video, setVideo] = useState(undefined);

  async function getMovieVideo(movieId: number) {
    try {
      const response = await getVideos(movieId);
      console.log(response, 'deu certo')
      setVideo(response.results[0]);
    } catch (error) {
      setVideo(undefined);
      console.log(error, 'cai aqui ');

    }
  }

  return { getMovieVideo, video };
}
