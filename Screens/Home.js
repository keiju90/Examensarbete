import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View>
      <Text style={styles.container}>Home screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    color: "red",
  },
});
