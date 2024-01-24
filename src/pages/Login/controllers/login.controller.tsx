import { useEffect, useState } from "react";
import { LoginView } from "../views/login.view";
import { Loading } from "../../../components/loading/loading";
import { singIn } from "../../../services/auth/auth.service";
import { setCookie } from "../../../utils/session.utils";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

export function LoginController() {
  const [isLoading, seIsLoading] = useState(false);

  const navigation = useNavigation();

  const fetchLogin = async (email: string, password: string) => {
    try {
      const response = await singIn(email, password);
      await setCookie(response.sessionId);
      return navigation.navigate("Home" as never);
    } catch (error) {
      Alert.alert(
        "Algo deu errado!",
        "parece que algo deu errado ao fazer o login, tente novamente."
      );
      console.log(error)
    } finally {
      seIsLoading(false);
    }
  };

  return <>{isLoading ? <Loading /> : <LoginView fetchLogin={fetchLogin} />}</>;
}
