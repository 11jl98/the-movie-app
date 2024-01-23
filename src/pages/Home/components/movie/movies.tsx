import { StyleSheet, View, Image } from "react-native";
import { Title } from "react-native-paper";

interface moviesListPropsInterface {
  movie: {
    poster_path: string | null;
    title: string | null;
  };
}

export function Movie({ movie }: moviesListPropsInterface) {
  const imgUrl = `${process.env.BASE_URL_IMG}${movie.poster_path}`;
  return (
    <View style={styles.container}>
      <Image source={{ uri: imgUrl }} style={styles.imageMovie} />
      <Title style={styles.title}>{movie.title}</Title>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 6,
    flex: 1,
  },
  title: {
    fontSize: 15,
    width: "100%",
    color: "#fff",
    maxWidth: 155,
    lineHeight: 20,
  },
  imageMovie: {
    width: 165,
    height: 245,
    objectFit: "cover",
  },
});
