import { StatusBar } from "expo-status-bar";
import Routes from "./src/routes/routes";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" style="light" />
      <Routes />
    </NavigationContainer>
  );
}
