import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function TodoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "rgba( 255,255, 255, 0.2)",
    padding: 10,
    margin: 8,
    borderWidth: 1,
    // borderColor: "#bbb",
    borderColor: "rgba( 255,255, 255, 0.1)",
    borderStyle: "dashed",
    borderRadius: 1,
    color: "black",
    // shahows
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});
