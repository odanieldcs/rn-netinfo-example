import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

export function NetworkStatus() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Você parece estar descontado, por favor, verifique sua internet. As
        funcionalidades do aplicativo serão limitadas.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    flex: 1,
    padding: 30,
    paddingTop: 45,
    backgroundColor: "#FFC2D8",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    flex: 1,
  },
});
