import { useContext, useEffect } from "react";
import { HomeView } from "../view/home.view";
import { ContextHome } from "../context/home.context";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

export function HomeController() {
  const { getHome, selectedRecommendedItem, lists, loading, refreshing } =
    useContext(ContextHome);

  useEffect(() => {
    getHome();
  }, []);

  useEffect(() => {
    selectedRecommendedItem();
  }, [lists]);

  return (
    <BottomSheetModalProvider>
      <HomeView
        moviesList={lists}
        getHome={getHome}
        refreshing={refreshing}
        isLoading={loading}
      />
    </BottomSheetModalProvider>
  );
}
