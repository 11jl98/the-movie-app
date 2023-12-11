import { StyleSheet, View } from "react-native";

export function LoadingSkeletonMovie() {
  return (
    <View style={styles.loadingSkeletonContainer}>
      <View style={styles.loadingSkeletonText}></View>
      <View style={styles.container}>
        {Array.from({ length: 3 }, (_, index) => (
          <View key={index} style={styles.loadingSkeleton}></View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingSkeletonContainer: {
    paddingTop: 20,
    flexDirection: "column",
  },
  loadingSkeletonText: {
    height: 15,
    width: "60%",
    backgroundColor: "#cdc6c6",
    marginBottom: 10,
    borderRadius: 5,
  },
  loadingSkeleton: {
    height: 245,
    width: 165,
    backgroundColor: "#cdc6c6",
    marginBottom: 10,
    borderRadius: 5,
    margin: 6,
  },

  container: {
    flexDirection: "row",
  },
});
