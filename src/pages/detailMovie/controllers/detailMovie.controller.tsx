import { useContext, useEffect, useState } from "react";
import { DetailMovieView } from "../views/detailMovie.view";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { ContextMovie } from "../../../context/movie.context";
import { Loading } from "../../../components/loading/loading";

interface movieDetailPropsInterface {
  route: any;
}

export function DetailMovieController({ route }: movieDetailPropsInterface) {
  const { movieId } = route.params;
  const { getDetailMovie, movie, loading } = useContext(ContextMovie);
  useEffect(() => {
    if (movieId) getDetailMovie(movieId);
  }, [movieId]);

  return (
    <BottomSheetModalProvider>
      {loading ? <Loading /> : <DetailMovieView movie={movie} />}
    </BottomSheetModalProvider>
  );
}
