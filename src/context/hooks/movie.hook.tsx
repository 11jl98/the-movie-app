import { useState } from "react";
import { getVideos, getDetail } from "../../services/movies/movies.service";
import { useNavigation } from "@react-navigation/native";
import { genresList } from "../../commons/genres.commons";

export default function Movie() {
  const [video, setVideo] = useState(undefined);
  const [movie, setMovie] = useState<any>(undefined);
  const [genres, setGenres] = useState<any>([]);
  const navigation = useNavigation();

  async function getMovieVideo(movieId: number) {
    try {
      const response = await getVideos(movieId);
      setVideo(response.results[0]);
    } catch (error) {
      setVideo(undefined);
      console.log(error);
    }
  }

  async function getDetailMovie(movieId: number) {
    try {
      const response = await getDetail(movieId);
      setMovie(response);
    } catch (error: any) {
      if (error.response.status === 404) {
        navigation.navigate({
          name: "NotFound",
        } as never);
      }
    }
  }
  return { getMovieVideo, video, getDetailMovie, movie };
}
