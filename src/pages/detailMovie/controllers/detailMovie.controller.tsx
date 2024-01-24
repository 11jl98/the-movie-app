import { useState } from "react";
import { DetailMovieView } from "../views/detailMovie.view";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Loading } from "../../../components/loading/loading";

interface movieDetailPropsInterface {
  route: any;
}

export function DetailMovieController({ route }: movieDetailPropsInterface) {
  const [isLoading, seIsLoading] = useState(true);

  const { movieId } = route.params;

  return (
    <BottomSheetModalProvider>
      {isLoading ? <Loading /> : <DetailMovieView movie={undefined} />}
    </BottomSheetModalProvider>
  );
}
