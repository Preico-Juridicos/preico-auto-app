import React from "react";
import { View, Text, Switch, Image, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useTheme } from "../contexts/ThemeContext";

const CustomDrawerContent = (props) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <DrawerContentScrollView {...props} style={styles.drawerContent}>
      <View style={styles.contentContainer}>
        <View
          style={{
            alignItems: "flex-start",
            padding: 20,
          }}
        >
          <Image
            source={require("../assets/logo.png")}
            style={{ width: 50, height: 50 }}
          />
        </View>
        <DrawerItemList {...props} />
        <View style={styles.modeTogglerContainer}>
          <Text style={styles.modeTogglerText}>Modo Oscuro</Text>
          <Switch value={isDarkMode} onValueChange={toggleTheme} />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "space-between",
    padding: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  modeTogglerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  modeTogglerText: {
    fontSize: 16,
    color: "gray",
    alignSelf: "center"
  },
  footer: {
  },
});

export default CustomDrawerContent;
