import { useEffect, useState } from "react";
import { RegisterView } from "../views/register.view";
import { Loading } from "../../../components/loading/loading";
import { register, singIn } from "../../../services/auth/auth.service";
import { setCookie } from "../../../utils/session.utils";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

export function RegisterController() {
  const [isLoading, seIsLoading] = useState(false);

  const navigation = useNavigation();

  const fetchRegister = async (
    email: string,
    password: string,
  ) => {
    try {
        await register(email, password);
        Alert.alert(
          "Sucesso",
          "Seu registro foi feito, agora basta logar e se divertir!",
          [{ text: "OK", onPress: () => navigation.navigate("Login" as never) }]
        );

    } catch (error) {
      Alert.alert(
        "Algo deu errado!",
        "parece que algo deu errado ao fazer o login, tente novamente."
      );
      console.log(error);
    } finally {
      seIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? <Loading /> : <RegisterView fetchRegister={fetchRegister} />}
    </>
  );
}
