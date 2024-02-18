import { useCallback, useEffect, useRef, useState } from "react";
import { LoginView } from "../views/login.view";
import { Loading } from "../../../components/loading/loading";
import { singIn } from "../../../services/auth/auth.service";
import { setCookie } from "../../../utils/session.utils";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

export function LoginController() {
  const [isLoading, setIsLoading] = useState(false);
  const email = useRef("");
  const password = useRef("");

  const navigation = useNavigation();

  const fetchLogin = async () => {
    try {
      setIsLoading(true);
      const response = await singIn(email.current, password.current);
      await setCookie(response.sessionId);
      return navigation.navigate("Home" as never);
    } catch (error) {
      Alert.alert(
        "Algo deu errado!",
        "parece que algo deu errado ao fazer o login, tente novamente."
      );
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeEmail = useCallback((value: string) => {
    email.current = value;
  }, []);

  const handleChangePassword = useCallback((value: string) => {
    password.current = value;
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <LoginView
          fetchLogin={fetchLogin}
          navigation={navigation}
          email={email.current}
          password={password.current}
          handleChangeEmail={handleChangeEmail}
          handleChangePassword={handleChangePassword}
        />
      )}
    </>
  );
}
