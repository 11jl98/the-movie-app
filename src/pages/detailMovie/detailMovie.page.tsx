import { MovieProvider } from "../../context/movie.context";
import { DetailMovieController } from "./controllers/detailMovie.controller";

const DetalilMoviePage = ({ route }: any) => {
  return (
    <MovieProvider>
      <DetailMovieController route={route} />
    </MovieProvider>
  );
};

export default DetalilMoviePage;
