import React from 'react';
import { View, FlatList } from 'react-native';
import ClaimCard from '../components/ClaimCard';

const MyClaimsScreen = () => {
  // Dummy data, replace with actual data from your backend
  const myClaims = [
    { id: '1', title: 'Reclamación 1', status: 'En progreso' },
    { id: '2', title: 'Reclamación 2', status: 'Completada' },
  ];

  return (
    <View>
      <FlatList
        data={myClaims}
        renderItem={({ item }) => <ClaimCard claim={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MyClaimsScreen;