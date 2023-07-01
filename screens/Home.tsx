import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import PalettePreview from "../components/PalettePreview";

const Home = ({ navigation }: any) => {
  const RAINBOW = [
    { colorName: "Red", hexCode: "#FF0000" },
    { colorName: "Orange", hexCode: "#FF7F00" },
    { colorName: "Yellow", hexCode: "#FFFF00" },
    { colorName: "Green", hexCode: "#00FF00" },
    { colorName: "Violet", hexCode: "#8B00FF" },
  ];

  const FRONTEND_MASTERS = [
    { colorName: "Red", hexCode: "#c02d28" },
    { colorName: "Black", hexCode: "#3e3e3e" },
    { colorName: "Grey", hexCode: "#8a8a8a" },
    { colorName: "White", hexCode: "#ffffff" },
    { colorName: "Orange", hexCode: "#e66225" },
  ];

  const COLORS = [
    { colorName: "Base03", hexCode: "#002b36" },
    { colorName: "Base02", hexCode: "#073642" },
    { colorName: "Base01", hexCode: "#586e75" },
    { colorName: "Base00", hexCode: "#657b83" },
    { colorName: "Base0", hexCode: "#839496" },
    { colorName: "Base1", hexCode: "#93a1a1" },
    { colorName: "Base2", hexCode: "#eee8d5" },
    { colorName: "Base3", hexCode: "#fdf6e3" },
    { colorName: "Yellow", hexCode: "#b58900" },
    { colorName: "Orange", hexCode: "#cb4b16" },
    { colorName: "Red", hexCode: "#dc322f" },
    { colorName: "Magenta", hexCode: "#d33682" },
    { colorName: "Violet", hexCode: "#6c71c4" },
    { colorName: "Blue", hexCode: "#268bd2" },
    { colorName: "Cyan", hexCode: "#2aa198" },
    { colorName: "Green", hexCode: "#859900" },
  ];

  const COLOR_PALETTES = [
    { paletteName: "Solarized", colors: COLORS },
    { paletteName: "Frontend Masters", colors: FRONTEND_MASTERS },
    { paletteName: "Rainbow", colors: RAINBOW },
  ];

  const bold = {
    fontWeight: "bold",
  };

  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.paletteName}
        data={COLOR_PALETTES}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ColorPalette", {
                colors: item.colors,
                paletteName: item.paletteName,
              })
            }
          >
            <PalettePreview title={item.paletteName} colors={item.colors} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    fontWeight: "bold",
  },
});

export default Home;
