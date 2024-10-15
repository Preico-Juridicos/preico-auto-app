import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const MyClaims = () => {
  // Dummy data, replace with actual data from your backend
  const myClaims = [
    { id: "1", title: "Reclamación 1", status: "En progreso" },
    { id: "2", title: "Reclamación 2", status: "Completada" },
    { id: "3", title: "Reclamación 3", status: "Completada" },
  ];

  return (
    <ScrollView
      style={{ maxHeight: 200 }}
      contentContainerStyle={{ flexGrow: 1, overflow: "hidden" }}
      showsHorizontalScrollIndicator={true}
    >
      {myClaims.map((claim) => (
        <View key={claim.id} style={styles.card}>
          <Text>{claim.title}</Text>
          <Text>{claim.status}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 100,
    margin: 10,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
});

export default MyClaims;
