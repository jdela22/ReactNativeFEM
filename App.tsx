import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ColorBox from "./components/Colorbox";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontWeight: "bold" }}>
          Here are some boxes of different colors
        </Text>
      </View>
      <ColorBox colorName="Cyan" hexCode="#2aa198" />
      <ColorBox colorName="Blue" hexCode="#268bd2" />
      <ColorBox colorName="Magenta" hexCode="#d33682" />
      <ColorBox colorName="Orange" hexCode="#cb4b16" />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 16,
    paddingTop: 40,
  },
});
