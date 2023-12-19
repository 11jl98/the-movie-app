import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, ActivityIndicator } from "react-native";

export function Loading() {
  return (
    <LinearGradient
      start={{ x: 0.0, y: 0.9 }}
      end={{ x: 0.0, y: 1.5 }}
      colors={["#05161a", "#0c7078", "#0f9690"]}
      style={styles.linearGradient}
    >
      <ActivityIndicator size={50} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    border: "none",
    alignItems:"center",
    justifyContent: "center"
  },
});
