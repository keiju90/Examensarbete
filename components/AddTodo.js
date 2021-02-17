import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

//destructure submithandler prop
export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");

  //sets text of form and passes in the value
  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="write something..."
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => submitHandler(text)}
        title="Add task"
        color="#292721"
      />
    </View>
  );
}

const styles = {
  input: {
    backgroundColor: "#e5e4e3",
    marginBottom: 20,
    // paddingHorizontal: 8,
    // paddingVertical: 8,
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
};
