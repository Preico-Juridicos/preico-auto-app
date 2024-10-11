import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Link, Stack } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "@/components/Screen";
import { useState, useEffect } from "react";
import { getGameDetails } from "@/lib/metacritic";
import { Score } from "@/components/Score";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if (id) {
      getGameDetails(id).then(setGameInfo);
    }
  }, [id]);

  return (
    
    <Screen>
      {gameInfo === null ? (
        <ActivityIndicator color="#bf9d60" size={"large"} />
      ) : (
        <>
          <Stack.Screen
            options={{
              headerStyle: { backgroundColor: "yellow" },
              headerTintColor: "black",
              headerTitle: gameInfo.title,
              headerLeft: () => {},
              headerRight: () => {},
            }}
          />
          <ScrollView>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: gameInfo.img }}
                style={{ width: 200, height: 300 }}
              />
              <Text className="mb-4 text-white text-center text-xl font-bold">{gameInfo.title}</Text>
              <Score score={gameInfo.score} maxScore={100} />
              <Text className="mt-2 text-white">{gameInfo.description}</Text>
            </View>
          </ScrollView>
        </>
      )}
    </Screen>
  );
}
