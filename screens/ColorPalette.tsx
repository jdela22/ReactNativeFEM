import React from "react";
import { View, Text, SafeAreaView, FlatList, StyleSheet } from "react-native";
import ColorBox from "../components/Colorbox";

const ColorPalette = ({ route }: any) => {
  const { colors, paletteName } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.hexCode}
        style={styles.list}
        data={colors}
        renderItem={({ item }) => (
          <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 16,
    paddingTop: 40,
  },
  list: {
    width: "100%",
  },
});

export default ColorPalette;
