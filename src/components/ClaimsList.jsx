import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const ClaimsList = () => {
  // Dummy data, replace with actual data from your backend
  const claims = [
    {
      id: "1",
      title: "Descubierto",
      description: "Reclamación por descubierto bancario",
    },
    {
      id: "2",
      title: "Comisiones",
      description: "Reclamación por comisiones indebidas",
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  );

  return (
    <FlatList
      data={claims}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f2e8cf",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default ClaimsList;
