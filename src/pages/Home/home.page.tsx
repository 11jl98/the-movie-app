import { HomeProvider } from "../../context/home.context";
import { HomeController } from "./controllers/home.controller";

const HomePage = () => {
  return (
    <HomeProvider>
      <HomeController />
    </HomeProvider>
  );
};

export default HomePage;
