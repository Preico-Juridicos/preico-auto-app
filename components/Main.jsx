import { useState, useEffect } from "react";

import {
  StyleSheet,
  View,
  Image,
  ActivityIndicator,
  FlatList,
  Pressable,
  Text,
} from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard } from "./GameCard";
import { Link } from "expo-router";
import { InfoIcon } from "./Icons";
import { Screen } from "./Screen";

export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <Screen>
      {games.length === 0 ? (
        <ActivityIndicator color="#bf9d60" size={"large"} />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
        ></FlatList>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: "#fff",
  },
  score: {
    fontSize: 16,
    color: "#0f0",
  },
});
