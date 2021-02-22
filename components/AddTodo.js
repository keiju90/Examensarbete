import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import SelectPicker from "react-native-form-select-picker";

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
        placeholder="Add todo.."
        onChangeText={changeHandler}
      />

      <TouchableOpacity
        onPress={() => submitHandler(text)}
        style={styles.button}
      >
        <Text>Add todo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  button: {
    alignItems: "center",
    backgroundColor: "#927071",
    padding: 15,
    marginRight: 30,
    marginLeft: 30,
    borderRadius: 5,
  },

  input: {
    backgroundColor: "#e5e4e3",
    marginBottom: 20,
    margin: 30,

    // paddingHorizontal: 8,
    // paddingVertical: 8,
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
};
