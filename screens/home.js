import * as React from "react";
import { View, Text, Button } from "react-native";

export function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Página inicial</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
    </View>
  );
}
