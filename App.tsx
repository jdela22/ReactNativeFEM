import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold" }}>
        Here are some boxes of different colors
      </Text>
      <Text style={styles.cyan}>cyan </Text>
      <Text style={styles.blue}>blue </Text>
      <Text style={styles.magenta}>magenta </Text>
      <Text style={styles.orange}>orange </Text>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // flexDirection: "row",
  },
  cyan: {
    backgroundColor: "#2aa198",
    width: "100%",
    textAlign: "center",
  },
  blue: {
    backgroundColor: "#268bd2",
    width: "100%",
    textAlign: "center",
  },
  magenta: {
    backgroundColor: "#d33682",
    width: "100%",
    textAlign: "center",
  },
  orange: {
    backgroundColor: "#cb4b16",
    width: "100%",
    textAlign: "center",
  },
});
