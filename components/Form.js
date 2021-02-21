import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Picker,
  View,
  TextInput,
  Button,
} from "react-native";

export default function Form() {
  const [selectedValue, setSelectedValue] = useState("java");

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
      <Button title="Add task" color="#292721" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
  },
  form: {
    backgroundColor: "#e5e4e3",
    marginBottom: 20,
    // paddingHorizontal: 8,
    // paddingVertical: 8,
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
