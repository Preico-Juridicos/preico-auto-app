import { Button, StyleSheet, Text, View } from "react-native";

export function Screen({ children }) {
  return <View className="flex-1 bg-black pt-4 px-2">{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center",
  },
});
