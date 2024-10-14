import React from "react";
import { View, Text, Switch, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useTheme } from "../contexts/ThemeContext";

const CustomDrawerContent = (props: any) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          alignItems: "flex-start",
          padding: 10,
        }}
      >
        <Image
          source={require("../assets/logo.png")}
          style={{ width: 50, height: 50 }}
        />
      </View>
      <DrawerItemList {...props} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <Text>Modo Oscuro</Text>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
