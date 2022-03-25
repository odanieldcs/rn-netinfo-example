import * as React from "react";
import { View, Text, Button } from "react-native";

export function AboutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>About Screen</Text>
      <Button title="Go to User" onPress={() => navigation.navigate("User")} />
    </View>
  );
}
