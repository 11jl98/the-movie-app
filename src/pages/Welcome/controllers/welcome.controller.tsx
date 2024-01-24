import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { WelcomeView } from "../views/welcome.view";
import { isExpiration } from "../../../utils/session.utils";

export function WelcomeController() {
  const navigation = useNavigation();

  const fetchSession = async () => {
    try {
      const session = await isExpiration();
      if (!session) {
        return navigation.navigate("Login" as never);
      }
      return navigation.navigate("Home" as never);
    } catch (error) {
      return navigation.navigate("Login" as never);
    }
  };

  return <WelcomeView fetchSession={fetchSession} />;
}
