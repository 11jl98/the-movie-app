import { StyleSheet, Text, View } from "react-native";

export function NotFoundView() {
  return (
    <View style={Styles.container}>
      <Text>
        DEsculpe, mas não existe informações extras sobre esse filme, tente uma
        nova busca
      </Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
