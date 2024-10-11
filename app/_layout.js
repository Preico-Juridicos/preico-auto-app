import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Link, Stack } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { InfoIcon, Logo } from "../components/Icons";

export default function Layout() {
  return (
    <View className="flex-1">
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer>
          <Drawer.Screen
            name="index" // This is the name of the page and must match the url from root
            options={{
              drawerLabel: "Home",
              title: "Preico Auto APP",
            }}
          />
          <Drawer.Screen
            name="about" // This is the name of the page and must match the url from root
            options={{
              drawerLabel: "About",
              title: "About",
            }}
          />
          {/* <Drawer.Screen
            name="/game/[id]" // This is the name of the page and must match the url from root
            options={{
              drawerLabel: "Game",
              title: "overview",
            }}
          /> */}
        </Drawer>
      </GestureHandlerRootView>
      {/* <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "white",
          },
          headerTintColor: "white",
          headerTitle: "",
          headerLeft: () => <Logo />,
          headerRight: () => (
            <></>
            // <Link asChild href="/about">
            //   <Pressable className="flex-row">
            //     {({ pressed }) => (
            //       <>
            //         <InfoIcon style={{ opacity: pressed ? 0.5 : 1 }} />
            //         <Text className={pressed ? "text-white" : "text-blue-400"}>
            //           About
            //         </Text>
            //       </>
            //     )}
            //   </Pressable>
            // </Link>
          ),
        }}
      /> */}
    </View>
  );
}
