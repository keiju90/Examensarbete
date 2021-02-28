import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

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
        placeholder="Add some text.."
        onChangeText={changeHandler}
      />

      <TouchableOpacity
        onPress={() => submitHandler(text)}
        style={styles.button}
      >
        <Text style={styles.addTodoBtnText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  button: {
    alignItems: "center",
    backgroundColor: "#383838",
    padding: 10,
    marginRight: 30,
    marginLeft: 30,
    borderRadius: 5,
  },
  addTodoBtnText: {
    color: "white",
    fontSize: 18,
    letterSpacing: 0.5,
    fontFamily: "jostlight",
  },

  input: {
    backgroundColor: "#d6d6d6",
    marginBottom: 20,
    margin: 30,
    // paddingHorizontal: 8,
    // paddingVertical: 8,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
};
