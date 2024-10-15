import React from "react";
import {
  View,
  Text,
  ScrollView,
  SectionList,
  SectionListData,
} from "react-native";
import MyClaims from "../components/MyClaims";
import ClaimsList from "../components/ClaimsList";
// import HelloWave from "../../components/HelloWave";

const HomeScreen = () => {
  const sections = [
    {
      title: "Mis Reclamaciones",
      data: [],
      renderHeader: () => (
        <View>
          <Text>Mis Reclamaciones</Text>
          <MyClaims />
        </View>
      ),
    },
    {
      title: "Reclamaciones",
      data: [],
      renderHeader: () => (
        <View>
          <Text>Reclamaciones</Text>
          <ClaimsList />
        </View>
      ),
    },
    {
      title: "Test",
      data: [],
      renderHeader: () => (
        <View>
          {/* <Text>Test</Text> */}
          {/* <HelloWave /> */}
        </View>
      ),
    },
  ];

  return (
    <SectionList
      sections={sections}
      keyExtractor={(item, index) => item.id || index.toString()}
      renderItem={({ item, section }) =>
        section.data.length ? renderClaimItem({ item }) : null
      }
      renderSectionHeader={({ section }) =>
        section.renderHeader ? (
          section.renderHeader()
        ) : (
          <Text>{section.title}</Text>
        )
      }
    />
  );
};

export default HomeScreen;
