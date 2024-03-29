import { useRef, useState } from "react";
import {
  StyleSheet,
  FlatList,
  Animated,
  RefreshControl,
  Platform,
} from "react-native";
import { MoviesList } from "../components/moviesList/moviesList";
import { MovieRecommended } from "../components/movieRecommended/movieRecommended";
import { LinearGradient } from "expo-linear-gradient";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { homePropsInterface } from "../types";

const H_MAX_HEIGHT = 500;
const H_MIN_HEIGHT = Platform.OS === "ios" ? 90 : 75;
const H_SCROLL_DISTANCE = H_MAX_HEIGHT - H_MIN_HEIGHT;

export function HomeView({
  listMovies,
  refreshHome,
  refreshing,
}: homePropsInterface) {
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const headerScrollHeight = scrollOffsetY.interpolate({
    inputRange: [0, H_SCROLL_DISTANCE],
    outputRange: [H_MAX_HEIGHT, H_MIN_HEIGHT],
    extrapolate: "clamp",
  });

  return (
    <LinearGradient
      start={{ x: 0.0, y: 0.9 }}
      end={{ x: 0.0, y: 1.5 }}
      colors={["#05161a", "#0c7078", "#0f9690"]}
      style={styles.linearGradient}
    >
      <FlatList
        style={{ marginTop: 0 }}
        data={listMovies.list_movie}
        keyExtractor={(_, index: number) => String(index)}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={
          <MovieRecommended
            headerScrollHeight={headerScrollHeight}
            scrollOffsetY={scrollOffsetY}
            bottomSheetModalRef={bottomSheetModalRef}
            recommended={listMovies.recommended}
          />
        }
        stickyHeaderIndices={[0]}
        renderItem={({ item }) => <MoviesList moviesList={item} />}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={refreshHome}
            colors={["#fff"]}
            tintColor={"#fff"}
            title="Refreshing..."
            titleColor="#fff"
            progressBackgroundColor="#000"
          />
        }
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    border: "none",
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Gill Sans",
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent",
  },
});
