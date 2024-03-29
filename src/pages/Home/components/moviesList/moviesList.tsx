import { StyleSheet, FlatList, View } from "react-native";
import { Movie } from "../movie/movies";
import { Title } from "react-native-paper";
import { MovieList } from "../../types";

interface moviesListPropsInterface {
  moviesList: MovieList;
}

export function MoviesList({ moviesList }: moviesListPropsInterface) {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>{moviesList.title_list}</Title>
      <FlatList
        contentContainerStyle={styles.list}
        data={moviesList.movies}
        keyExtractor={(item: any) => String(item.id)}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Movie
            movie={{
              poster_path: item.poster_path,
              title: item.title || item.original_title,
            }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    border: "none",
    paddingStart: 8,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Gill Sans",
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent",
  },
  title: {
    fontSize: 23,
    width: "100%",
    color: "#fff",
    paddingStart: 8,
  },

  list: {
    paddingTop: 8,
    paddingBottom: 20,
  },
});
