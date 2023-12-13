import { useState } from "react";
import {
  getOriginals,
  getForYou,
  getTopRated,
  getAction,
  getComedy,
  getHorror,
  getRomance,
  getDocumentry,
} from "../../services/home/home.service";
import { useNavigation } from "@react-navigation/native";
import { categoriesList } from "../../commons/categories.commons";

export default function Home() {
  const [lists, setLists] = useState<any>([]);
  const [recommendedItem, setRecommendedItem] = useState<any>(undefined);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [errorImage, seterrorImage] = useState(true);
  const navigation = useNavigation();

  async function getHome() {
    try {
      setRefreshing(true);
      const responseList = await Promise.all([
        getOriginals(),
        getForYou(),
        getTopRated(),
        getAction(),
        getComedy(),
        getHorror(),
        getRomance(),
        getDocumentry(),
      ]);
      setLists(formatedToList(responseList));
    } catch (error) {
      alert(error);
    } finally {
      setRefreshing(false);
    }
  }

  function formatedToList(responseList: any[]) {
    return responseList.map((item, index) => {
      return {
        title_list: categoriesList[index].title,
        slug: categoriesList[index].slug,
        itens: item.results,
      };
    });
  }

  function selectedRecommendedItem() {
    const originalsList = lists.find((item: any) => item.slug === "originals");
    if (!originalsList) {
      return;
    }
    const randomChose = Math.floor(
      Math.random() * (originalsList.itens.length - 1)
    );
    setRecommendedItem(originalsList.itens[randomChose]);
  }

  function handleLoadingImage() {
    setLoading(false);
  }

  function handleErrorImage() {
    seterrorImage(false);
  }

  return {
    getHome,
    lists,
    selectedRecommendedItem,
    recommendedItem,
    loading,
    handleLoadingImage,
    errorImage,
    handleErrorImage,
    refreshing,
  };
}
