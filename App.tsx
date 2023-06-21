import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontWeight: "bold" }}>
          Here are some boxes of different colors
        </Text>
      </View>
      <View style={[styles.box, styles.cyan]}>
        <Text style={styles.boxText}>cyan </Text>
      </View>
      <View style={[styles.box, styles.blue]}>
        <Text style={styles.boxText}>blue </Text>
      </View>
      <View style={[styles.box, styles.magenta]}>
        <Text style={styles.boxText}>magenta </Text>
      </View>
      <View style={[styles.box, styles.orange]}>
        <Text style={styles.boxText}>orange </Text>
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
    padding: 16,
    paddingTop: 40,
    // paddingHorizontal:
  },
  box: {
    width: "100%",
    textAlign: "center",
    marginBottom: 5,
    alignItems: "center",
    padding: 10,
  },
  boxText: {
    color: "white",
    fontWeight: "bold",
  },
  cyan: {
    backgroundColor: "#2aa198",
  },
  blue: {
    backgroundColor: "#268bd2",
  },
  magenta: {
    backgroundColor: "#d33682",
  },
  orange: {
    backgroundColor: "#cb4b16",
  },
});
