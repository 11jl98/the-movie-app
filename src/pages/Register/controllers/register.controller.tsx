import { useCallback, useEffect, useRef, useState } from "react";
import { RegisterView } from "../views/register.view";
import { Loading } from "../../../components/loading/loading";
import { register } from "../../../services/auth/auth.service";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

export function RegisterController() {
  const [isLoading, setIsLoading] = useState(false);
  const email = useRef("");
  const password = useRef("");
  const confirmedPassword = useRef("");

  const navigation = useNavigation();

  const fetchRegister = async () => {
    try {
      setIsLoading(true);
      await register(email.current, password.current);
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

  const handleChangeConfirmedPassword = useCallback((value: string) => {
    password.current = value;
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <RegisterView
          fetchRegister={fetchRegister}
          email={email.current}
          password={password.current}
          confirmedPassword={confirmedPassword.current}
          handleChangeConfirmedPassword={handleChangeConfirmedPassword}
          handleChangePassword={handleChangePassword}
          handleChangeEmail={handleChangeEmail}
        />
      )}
    </>
  );
}
