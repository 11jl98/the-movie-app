import { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
  StatusBar,
  Animated,
  View,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ContextHome } from "../../../../context/home.context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { getGenres } from "../../../../utils/utils";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 8
  : 50;

export function MovieRecommended(props: any) {
  const [genres, setGenres] = useState<any>([]);

  const Navigation = useNavigation();
  const { recommendedItem } = useContext(ContextHome);
  const imgUrl = `${process.env.BASE_URL_IMG}${recommendedItem?.poster_path}`;

  useEffect(() => {
    if (recommendedItem) {
      const response = getGenres(recommendedItem);
      setGenres([...response]);
    }
  }, [recommendedItem]);

  return (
    <Animated.View
      style={{
        height: props.headerScrollHeight,
        overflow: "hidden",
      }}
    >
      <ImageBackground
        source={{ uri: imgUrl }}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <LinearGradient
          locations={[0.14, 0.45, 0.8]}
          colors={["#05161a", "#0c70780f", "#05161a"]}
          style={styles.container}
        >
          <View style={[styles.headerHome]}>
            <TouchableOpacity
              onPress={() => Navigation.dispatch(DrawerActions.openDrawer())}
            >
              <Icon
                style={[
                  styles.iconHeader,
                  {
                    marginRight: 80,
                    paddingTop: Platform.OS === "ios" ? 2 : 5,
                  },
                ]}
                name={"menu"}
                color={"#fff"}
                size={22}
              />
            </TouchableOpacity>
            <Text style={styles.titleHeader}>Bem vindo de volta!</Text>
          </View>
          <Text style={styles.title}>{recommendedItem?.name}</Text>
          <View style={styles.containGenres}>
            {genres.map((item: any, index: number) => (
              <View key={index} style={styles.containGenres}>
                <Text  style={styles.subTitles}>
                  {item?.name}
                </Text>
                {genres.length - 1 !== index && (
                  <Text style={styles.subTitles}>•</Text>
                )}
              </View>
            ))}
          </View>
          <View style={styles.containItems}>
            <TouchableOpacity
              style={styles.iconsList}
              onPress={() => Navigation.dispatch(DrawerActions.openDrawer())}
            >
              <Icon
                style={[
                  {
                    paddingTop: Platform.OS === "ios" ? 2 : 5,
                  },
                ]}
                name={"plus-circle-outline"}
                color={"#fff"}
                size={32}
              />
              <Text style={styles.subTitles}>Minha a lista</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonInfos}
              onPress={() =>
                Navigation.navigate({
                  name: "Detail",
                  params: { movieId: recommendedItem.id },
                  merge: true,
                } as never)
              }
            >
              <Text style={styles.subTitles}>Detalhes</Text>
              <Icon name={"information-outline"} color={"#fff"} size={22} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconsList}
              onPress={() => Navigation.dispatch(DrawerActions.openDrawer())}
            >
              <Icon
                style={[
                  {
                    paddingTop: Platform.OS === "ios" ? 2 : 5,
                  },
                ]}
                name={"share-variant-outline"}
                color={"#fff"}
                size={32}
              />
              <Text style={styles.subTitles}>Compartilhar</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 35,
    color: "#fff",
    paddingBottom: 20,
    fontWeight: "bold",
  },
  imageBackground: {
    height: 510,
  },
  headerHome: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: statusBarHeight,
    width: "100%",
    height: 100,
  },
  titleHeader: {
    fontSize: 20,
    color: "#fff",
    paddingBottom: 60,
    fontWeight: "bold",
    paddingStart: 8,
  },
  iconHeader: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    paddingStart: 8,
  },
  subTitles: {
    fontSize: 14,
    color: "#fff",
    margin: 5,
  },
  containGenres: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  containItems: {
    width: "100%",
    flexDirection: "row",
    paddingBottom: 60,
    justifyContent: "space-around",
    alignItems: "center",
  },
  iconsList: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonInfos: {
    width: 110,
    height: 35,
    backgroundColor: "#0f9690",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
