import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image, StyleSheet } from "react-native";

import logo from "../assets/logo.png";

export const HomeIcon = (props) => (
  <MaterialIcons name="home" size={24} color="white" {...props} />
);
export const InfoIcon = (props) => (
  <MaterialIcons name="info" size={24} color="white" {...props} />
);

export const Logo = (props) => (
  <Image source={logo} style={styles.logo} {...props} />
);

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    resizeMode: "center",
  },
});
