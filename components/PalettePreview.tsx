import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const PalettePreview = ({
  title,
  colors,
}: {
  title: string;
  colors: any[];
}) => {
  return (
    <View>
      <Text style={styles.header}>{title}</Text>
      <FlatList
        style={styles.preview}
        keyExtractor={(item) => item.hexCode}
        data={colors.slice(0, 5)}
        renderItem={({ item }) => (
          <View style={[styles.box, { backgroundColor: item.hexCode }]}></View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  preview: {
    flexDirection: "row",
  },
  box: {
    height: 30,
    width: 30,
    marginRight: 5,
    flex: 1,
  },
  header: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default PalettePreview;
