import * as React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNetworkStatus } from "./hooks/useNetworkStatus";

import { NetworkStatus } from "./components/network";
import { HomeScreen } from "./screens/home";
import { AboutScreen } from "./screens/about";
import { UserScreen } from "./screens/user";

const Stack = createNativeStackNavigator();

export default function App() {
  const { isConnected, type } = useNetworkStatus();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="User" component={UserScreen} />
      </Stack.Navigator>
      {isConnected && <NetworkStatus />}

      <StatusBar barStyle="dark-content" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
