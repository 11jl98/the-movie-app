import { createContext } from "react";
import Home from "./hooks/home.hook";

const DEFAULT_VALUE = {
  getHome: async () => {},
  lists: [] as any,
  selectedRecommendedItem: () => {},
  recommendedItem: {} as any,
  loading: true,
  handleLoadingImage: () => {},
  errorImage: true,
  handleErrorImage: () => {},
  refreshing: false,
  refreshHome: async () => {}
};

const ContextHome = createContext(DEFAULT_VALUE);

function HomeProvider({ children }: any) {
  const {
    getHome,
    lists,
    selectedRecommendedItem,
    recommendedItem,
    loading,
    handleLoadingImage,
    errorImage,
    handleErrorImage,
    refreshing,
    refreshHome
  } = Home();
  return (
    <ContextHome.Provider
      value={{
        getHome,
        lists,
        selectedRecommendedItem,
        recommendedItem,
        loading,
        handleLoadingImage,
        errorImage,
        handleErrorImage,
        refreshing,
        refreshHome
      }}
    >
      {children}
    </ContextHome.Provider>
  );
}

export { ContextHome, HomeProvider };
