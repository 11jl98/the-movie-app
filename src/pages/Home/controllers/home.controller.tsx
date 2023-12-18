import { Suspense, useContext, useEffect } from "react";
import { HomeView } from "../views/home.view";
import { ContextHome } from "../../../context/home.context";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { ActivityIndicator } from "react-native";

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
    <Suspense fallback={<ActivityIndicator />}>
      <BottomSheetModalProvider>
        <HomeView
          moviesList={lists}
          refreshing={refreshing}
          isLoading={loading}
          refreshHome={refreshHome}
        />
      </BottomSheetModalProvider>
    </Suspense>
  );
}
