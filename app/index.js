import "../gesture-handler";

import * as React from "react";
import { Text, View } from "react-native";

import { Main } from "@/components/Main";

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

export default function Index() {
  return <HomeScreen />;
}
