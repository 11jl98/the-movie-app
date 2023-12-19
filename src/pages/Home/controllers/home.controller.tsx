import { useContext, useEffect } from "react";
import { HomeView } from "../views/home.view";
import { ContextHome } from "../../../context/home.context";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Loading } from "../../../components/loading/loading";

export function HomeController() {
  const {
    getHome,
    selectedRecommendedItem,
    lists,
    loading,
    refreshing,
    refreshHome,
  } = useContext(ContextHome);

  useEffect(() => {
    getHome();
  }, []);

  useEffect(() => {
    selectedRecommendedItem();
  }, [lists]);

  return (
    <BottomSheetModalProvider>
      {loading ? (
        <Loading />
      ) : (
        <HomeView
          moviesList={lists}
          refreshHome={refreshHome}
          refreshing={refreshing}
          isLoading={loading}
        />
      )}
    </BottomSheetModalProvider>
  );
}
