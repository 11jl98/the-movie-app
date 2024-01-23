import { useContext, useEffect, useState } from "react";
import { LoginView } from "../views/login.view";
import { Loading } from "../../../components/loading/loading";

export function LoginController({ navigation }: any) {
  const [isLoading, seIsLoading] = useState(true);
  return <>{isLoading ? <Loading /> : <LoginView navigation={navigation} />}</>;
}
