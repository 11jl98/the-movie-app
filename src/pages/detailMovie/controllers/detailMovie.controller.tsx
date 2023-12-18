import { useContext, useEffect, useState } from "react";
import { DetailMovieView } from "../views/detailMovie.view";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { ContextMovie } from "../../../context/movie.context";

interface movieDetailPropsInterface {
  route: any;
}

export function DetailMovieController({ route }: movieDetailPropsInterface) {
  const { movieId } = route.params;
  const { getDetailMovie, movie } = useContext(ContextMovie);
  useEffect(() => {
    if (movieId) getDetailMovie(movieId);
  }, [movieId]);

  return (
    <BottomSheetModalProvider>
      <DetailMovieView movie={movie} />
    </BottomSheetModalProvider>
  );
}
