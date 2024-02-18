import { NavigationProp } from "@react-navigation/native";

export interface Session {
  sessionId: string;
}
export interface loginViewPropsInterface {
  fetchLogin: () => Promise<void>;
  handleChangeEmail: (value: string) => void;
  handleChangePassword: (value: string) => void;
  navigation: NavigationProp<ReactNavigation.RootParamList>;
  email: string;
  password: string;
}
