import React, {
  useState,
  useMemo,
  useCallback,
  useContext,
  useEffect,
} from "react";
import { View, Text, StyleSheet, Alert, Button } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import YoutubePlayer from "react-native-youtube-iframe";
import { ContextVideo } from "../../context/movie.context";

export function DetailSheet(props: any) {
  const snapPoints = useMemo(() => ["95%", "95%"], []);
  const imgUrl = `${process.env.BASE_URL_IMG}${props.movie?.poster_path}`;
  const [playing, setPlaying] = useState(false);
  const { getMovieVideo, video } = useContext(ContextVideo);

  const onStateChange = useCallback((state: string) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = () => {
    console.log(video);
  };

  useEffect(() => {
    if (props.bottomSheetModalRef) {
      getMovieVideo(props.movie?.id);
    }
  }, [props.bottomSheetModalRef]);

  return (
    <BottomSheetModal
      ref={props.bottomSheetModalRef}
      index={1}
      snapPoints={snapPoints}
    >
      <LinearGradient
        start={{ x: 0.0, y: 0.7 }}
        end={{ x: 0.0, y: 1.5 }}
        colors={["#05161a", "#0c7078", "#0f9690"]}
        style={styles.contentContainer}
      >
        <View>
          <Text style={styles.titleMovie}>{props.movie?.name}</Text>
          <Text style={styles.overview}>{props.movie?.overview}</Text>
          <View style={styles.containGenres}>
            {props.genres.map((item: any, index: number) => (
              <>
                <Text key={index} style={styles.subTitles}>
                  {item?.name}
                </Text>
                {props.genres.length - 1 !== index && (
                  <Text style={styles.subTitles}>•</Text>
                )}
              </>
            ))}
          </View>
          <View style={styles.containStars}>
            {Array.from(
              { length: Math.round(Number(props.movie?.vote_average)) },
              (_, index) => (
                <Icon key={index} name="star" size={28} color="#e8e900" />
              )
            )}
            <Text style={styles.avarageText}>
              {Math.round(Number(props.movie?.vote_average))}
            </Text>
          </View>
          <View style={styles.container}>
            {video?.key ? (
              <>
                <YoutubePlayer
                  height={300}
                  width={400}
                  play={playing}
                  videoId={video?.key}
                  onChangeState={onStateChange}
                />
              </>
            ) : (
              <>
                <Text>Trailer não disponivel!</Text>
                <Button
                  title={playing ? "pause" : "play"}
                  onPress={togglePlaying}
                />
              </>
            )}
          </View>
        </View>
      </LinearGradient>
    </BottomSheetModal>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingStart: 8,
  },
  containStars: {
    width: "100%",
    flexDirection: "row",
  },
  avarageText: {
    fontSize: 15,
    alignSelf: "center",
    marginLeft: 5,
    color: "#fff",
  },
  titleMovie: {
    fontSize: 32,
    fontWeight: "bold",
    paddingTop: 16,
    paddingBottom: 16,
    alignSelf: "center",
    color: "#fff",
  },
  subTitles: {
    color: "#fff",
    marginTop: 8,
    marginStart: 0,
    margin: 5,
    fontWeight: "bold",
  },
  containGenres: {
    flexDirection: "row",
  },
  overview: {
    color: "#fff",
  },
  container: {
    paddingTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: 300,
    height: 200,
  },
});
