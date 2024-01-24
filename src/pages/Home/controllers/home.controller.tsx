import { useEffect, useState } from "react";
import { HomeView } from "../views/home.view";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Loading } from "../../../components/loading/loading";
import { getMovie } from "../../../services/home/home.service";
import { MovieType } from "../types";
import { useNavigation } from "@react-navigation/native";
import { clearCookies } from "../../../utils/session.utils";

export function HomeController() {
  const [isLoading, setIsLoading] = useState(true);
  const [listMovies, setListMovies] = useState<MovieType>({} as MovieType);
  const [refreshing, setRefreshing] = useState(false);

  const navigation = useNavigation();

  const fecthMovies = async () => {
    try {
      const response = await getMovie();
      setListMovies(response);
    } catch ({ error }: any) {
      navigation.navigate("NotFound" as never);
    } finally {
      setIsLoading(false);
    }
  };
  const refreshHome = async () => {
    try {
      setRefreshing(true);
      const response = await getMovie();
      setListMovies(response);
    } catch (error) {
      console.log(error);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fecthMovies();
  }, []);

  return (
    <BottomSheetModalProvider>
      {isLoading ? (
        <Loading />
      ) : (
        <HomeView
          listMovies={listMovies}
          refreshHome={refreshHome}
          refreshing={refreshing}
        />
      )}
    </BottomSheetModalProvider>
  );
}
