import React from "react";
import { View, Text } from "react-native";

const PalettePreview = ({ title }: { title: string }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default PalettePreview;
