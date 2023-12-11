import { createDrawerNavigator } from "@react-navigation/drawer";
import HomePage from "../pages/Home/home.page";
import { SearchPage } from "../pages/Search/search.page";
import DrawerContent from "./drawer-content";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Inicio"
        component={HomePage}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "transparent",
            borderBottomColor: "transparent",
          },
          headerTintColor: "#0f9690",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 22,
          },
        }}
      />
      <Drawer.Screen
        name="Pesquisa"
        component={SearchPage}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#05161a",
            borderBottomColor: "#05161a",
          },
          headerTintColor: "#0f9690",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 22,
            borderBottomColor: "#05161a",
          },
        }}
      />
    </Drawer.Navigator>
  );
}

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={MyDrawer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
