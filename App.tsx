import { StatusBar } from "expo-status-bar";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import ColorBox from "./components/Colorbox";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import ColorPalette from "./screens/ColorPalette";
import { createStackNavigator } from "@react-navigation/stack";
export default function App() {
  type RootStackParamList = {
    ColorPalette: { paletteName: string };
    Home: {};
  };

  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen
          name="ColorPalette"
          component={ColorPalette}
          options={({ route }) => {
            console.log(route);
            return { title: route.params.paletteName };
          }}
          // options={{ title: "My home" }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
