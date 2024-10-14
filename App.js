import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ThemeProvider } from "./src/contexts/ThemeContext";
import HomeScreen from "./src/screens/HomeScreen";
import ClaimsScreen from "./src/screens/ClaimsScreen";
import MyClaimsScreen from "./src/screens/MyClaimsScreen";
import CustomDrawerContent from "./src/components/CustomDrawerContent";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          screenOptions={{
            headerStyle: {
              backgroundColor: "#bf9d60",
            },
            headerTintColor: "#fff",
          }}
        >
          <Drawer.Screen name="Inicio" component={HomeScreen} />
          <Drawer.Screen name="Reclamaciones" component={ClaimsScreen} />
          <Drawer.Screen name="Mis Reclamaciones" component={MyClaimsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
