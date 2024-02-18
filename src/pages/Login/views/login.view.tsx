import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { loginViewPropsInterface } from "../types";

export function LoginView({
  fetchLogin,
  handleChangeEmail,
  handleChangePassword,
  navigation,
  password,
  email,
}: loginViewPropsInterface) {
  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" style={styles.containerHeader}>
        <Text style={styles.message}>Bem vindo(a)</Text>
      </Animatable.View>

      <Animatable.View
        animation="fadeInUp"
        delay={500}
        style={styles.containerForm}
      >
        <Text style={styles.title}>Email</Text>
        <TextInput
          placeholder="Digite seu email..."
          style={styles.input}
          value={email}
          onChangeText={(text) => handleChangeEmail(text)}
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput
          secureTextEntry={true}
          placeholder="Sua senha"
          style={styles.input}
          value={password}
          onChangeText={(text) => handleChangePassword(text)}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Register" as never)}
        >
          <Text style={styles.buttonTextNewPassord}>Esqueceu sua senha? </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={fetchLogin}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonSingOut}
          onPress={() => navigation.navigate("Register" as never)}
        >
          <Text style={styles.buttonTextSingOut}>
            Não é cadastrado? Clique aqui{" "}
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#05161a",
  },
  containerHeader: {
    marginTop: "14%",
    marginBottom: "8%",
    paddingStart: "5%",
  },
  message: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFAFA",
  },
  containerForm: {
    flex: 1,
    backgroundColor: "#FFFAFA",
    paddingStart: "5%",
    paddingEnd: "5%",
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
  },
  title: {
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#0f9690",
    borderRadius: 50,
    paddingVertical: 8,
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    marginTop: 20,
  },
  buttonText: {
    color: "#FFFAFA",
    fontWeight: "bold",
  },
  buttonTextSingOut: {
    color: "#a1a1a1",
    textAlign: "center",
    paddingTop: 20,
  },
  buttonTextNewPassord: {
    color: "#a1a1a1",
  },
  buttonSingOut: {
    color: "#a1a1a1",
    alignSelf: "center",
  },
});
