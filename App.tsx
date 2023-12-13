import { StatusBar } from "expo-status-bar";
import Routes from "./src/routes/routes";
import { NavigationContainer } from "@react-navigation/native";
import { VideoProvider } from "./src/context/movieVideo.context";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" style="light" />
      <VideoProvider>
        <Routes />
      </VideoProvider>
    </NavigationContainer>
  );
}
