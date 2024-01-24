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

interface RegisterViewPropsInterface {
  fetchRegister: (email: string, password: string) => Promise<void>;
}

export function RegisterView({ fetchRegister }: RegisterViewPropsInterface) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" style={styles.containerHeader}>
        <Text style={styles.message}>Cadastre-se aqui!</Text>
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
          onChangeText={(text) => setEmail(text)}
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput
          secureTextEntry={true}
          placeholder="Sua senha"
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <Text style={styles.title}>Confirme sua senha</Text>
        <TextInput
          secureTextEntry={true}
          placeholder="Sua senha"
          style={styles.input}
          value={confirmedPassword}
          onChangeText={(text) => setConfirmedPassword(text)}
        />
        {password !== confirmedPassword && confirmedPassword !== "" && (
          <Text style={styles.titleError}>As senhas não são iguais</Text>
        )}

        <TouchableOpacity
          style={styles.button}
          onPress={() => fetchRegister(email, password)}
          disabled={password !== confirmedPassword}
        >
          <Text style={styles.buttonText}>Enviar</Text>
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
  titleError: {
    fontSize: 13,
    color: "red",
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
  buttonSingOut: {
    color: "#a1a1a1",
    alignSelf: "center",
  },
});
