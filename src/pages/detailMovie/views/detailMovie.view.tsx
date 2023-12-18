import { View, Text, StyleSheet, Alert, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface MoviePropsInterface {
  movie: any;
}

export function DetailMovieView({ movie }: MoviePropsInterface) {
  return (
    <LinearGradient
      start={{ x: 0.0, y: 0.9 }}
      end={{ x: 0.0, y: 1.5 }}
      colors={["#05161a", "#0c7078", "#0f9690"]}
      style={styles.linearGradient}
    >
      <View>
        <Text style={styles.titleMovie}>{movie?.name}</Text>
        <Text style={styles.overview}>{movie?.overview}</Text>
        <View style={styles.containGenres}>
          {movie?.genres?.map((item: any, index: number) => (
            <>
              <Text key={index} style={styles.subTitles}>
                {item?.name}
              </Text>
              {movie.genres.length - 1 !== index && (
                <Text style={styles.subTitles}>•</Text>
              )}
            </>
          ))}
        </View>
        <View style={styles.containStars}>
          {Array.from(
            { length: Math.round(Number(movie?.vote_average)) },
            (_, index) => (
              <Icon key={index} name="star" size={28} color="#e8e900" />
            )
          )}
          <Text style={styles.avarageText}>
            {Math.round(Number(movie?.vote_average))}
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    border: "none",
  },
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
