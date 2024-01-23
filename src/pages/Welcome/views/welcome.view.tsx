import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

export function WelcomeView() {
  return (
    <LinearGradient
      start={{ x: 0.0, y: 0.4 }}
      end={{ x: 0.0, y: 1.5 }}
      colors={["#05161a", "#0c7078", "#0f9690"]}
      style={styles.linearGradient}
    >
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require("../../../assets/logo-movie.jpg")}
          style={{
            width: 250,
            height: 250,
            margin: 0,
            padding: 0,
            borderRadius: 500,
          }}
          resizeMode="contain"
        />
      </View>
      <Animatable.View
        delay={600}
        animation="fadeInUp"
        style={styles.containerForm}
      >
        <Text style={styles.title}>
          Acesse e descubra aquele filme perfeito para você!
        </Text>
        <Text style={styles.text}>Faça o seu Login</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    border: "none",
  },
  containerLogo: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  containerForm: {
    flex: 1,
    backgroundColor: "#FFFAFA",
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    paddingTop: 15,
    paddingStart: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 28,
    marginBottom: 12,
  },
  text: {
    color: "#a1a1a1",
    alignSelf: "center",
    paddingStart: 0,
    position: "absolute",
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    top: 135,
  },
  button: {
    position: "absolute",
    backgroundColor: "#0f9690",
    borderRadius: 50,
    paddingVertical: 8,
    width: "60%",
    alignSelf: "center",
    bottom: "15%",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  textButton: {
    color: "#FFFAFA",
    fontWeight: "bold",
  },
});
