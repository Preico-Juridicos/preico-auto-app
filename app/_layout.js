import { Link, Stack } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { InfoIcon, Logo } from "../components/Icons";

export default function Layout() {
  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "white",
          headerTitle: "",
          headerLeft: () => <Logo />,
          headerRight: () => (
            <Link asChild href="/about">
              <Pressable className="flex-row">
                {({ pressed }) => (
                  <>
                    <InfoIcon style={{ opacity: pressed ? 0.5 : 1 }} />
                    <Text className={pressed ? "text-white" : "text-blue-400"}>
                      About
                    </Text>
                  </>
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}
