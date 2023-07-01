import React from "react";
import { View, Text, StyleSheet, ProgressViewIOSComponent } from "react-native";

type props = {
  colorName: string;
  hexCode: string;
};

const ColorBox = ({ colorName, hexCode }: props) => {
  const boxColor = {
    backgroundColor: hexCode,
  };

  const textStyle = {
    color:
      parseInt(hexCode.replace("#", ""), 16) > 0xffffff / 1.1
        ? "black"
        : "white",
  };

  return (
    <View style={[styles.box, boxColor]}>
      <Text style={[styles.boxText, textStyle]}>
        {colorName} : {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    textAlign: "center",
    marginBottom: 5,
    alignItems: "center",
    padding: 10,
  },
  boxText: { color: "white", fontWeight: "bold" },
});

export default ColorBox;
