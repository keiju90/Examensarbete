import React, { useState } from "react";
import data from "./components/data";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
import PickerModal from "./components/PickerModal";

const getFonts = () =>
  Font.loadAsync({
    abrilfatface: require("./assets/fonts/AbrilFatface-Regular.ttf"),
    jostlight: require("./assets/fonts/Jost-Light.ttf"),
    reemkufi: require("./assets/fonts/ReemKufi-Regular.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const [todos, setTodos] = useState([{ text: "Repot a plant", key: "1" }]);

  const [currentIndex, setCurrentIndex] = useState(null);

  const [show, setShow] = useState(false);

  // function: When pressing on an todo item, it gets deleted.
  // filter through the current state, takes out the one item which has the key that
  // is pressed and "deletes" it.
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  // takes the "text" from usestate in addtodo.js form
  // returns a new array with the current state in this js-file using the
  // spread operator
  // adds a key to text with math.random and turns it to a string.
  //(not idela to do, should import a library to do this)
  //
  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [{ text: text, key: Math.random().toString() }, ...prevTodos];
    });
  };

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        {/* <Ionicons
          style={styles.listicon}
          name="ios-list-outline"
          size={60}
          color="pink"
        /> */}
        {/* <Text style={styles.addHeader}>Add task</Text> */}
        <Text style={styles.addHeader2}>Add your task</Text>
        {/* <Text style={styles.addHeader3}>Add task</Text> */}

        <AddTodo submitHandler={submitHandler} />

        <TouchableOpacity
          style={styles.selectCategory}
          onPress={() => {
            setShow(true);
            //if toggle
            // setShow(show === false ? null : true);
          }}
        >
          <Text style={styles.categoryTxt}>Select category</Text>
        </TouchableOpacity>

        {show === true && (
          <PickerModal show={show} setShow={setShow}></PickerModal>
        )}

        {data.map(({ bg, color, category, subCategories }, index) => {
          return (
            <TouchableOpacity
              key={category}
              onPress={(e) => {
                setCurrentIndex(index === currentIndex ? null : index);
                //shows current category when clicking on the title.
                console.log(e.target.textContent);
              }}
              style={styles.cardContainer}
              activeOpacity={0.9}
            >
              {/* the card itself containing the category from data.js */}
              <View style={[styles.card, { backgroundColor: bg }]}>
                <Text style={[styles.heading, { color: color }]}>
                  {category}
                </Text>
                {/* if index is currentindex, show items  */}
                {index === currentIndex && (
                  <View style={styles.subCategoriesList}>
                    {subCategories.map((subCategory) => (
                      <Text key={subCategory} style={[styles.body, { color }]}>
                        {subCategory}
                      </Text>
                    ))}
                    <View style={styles.listContainer}>
                      <View style={styles.listContent}>
                        {/* <AddTodo submitHandler={submitHandler} /> */}
                        {/* <Form></Form> */}
                        <View style={styles.list}>
                          <FlatList
                            data={todos}
                            //the data from state todos being rendered, one for every item.
                            renderItem={({ item }) => (
                              //passing presshandler function as a prop to todoitem.js
                              <TodoItem
                                item={item}
                                pressHandler={pressHandler}
                              />
                            )}
                          ></FlatList>
                        </View>
                      </View>
                    </View>
                  </View>
                )}
                {/* end of index===currentindex above */}
              </View>
            </TouchableOpacity>
          );
          //end of data.map above
        })}
      </View>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 100,
    backgroundColor: "#ededed",
    justifyContent: "center",
  },

  listicon: {
    textAlign: "center",
  },

  addHeader: {
    fontSize: 30,
    fontFamily: "abrilfatface",
    color: "black",
    textTransform: "uppercase",
    textAlign: "center",
  },
  addHeader2: {
    fontFamily: "jostlight",
    fontSize: 30,
    color: "black",
    textTransform: "uppercase",
    textAlign: "center",
  },
  addHeader3: {
    fontSize: 30,
    fontFamily: "reemkufi",
    color: "black",
    textTransform: "uppercase",
    textAlign: "center",
  },

  selectCategory: {
    alignItems: "center",
    backgroundColor: "#616161",
    marginTop: 15,
    marginBottom: 25,
    padding: 12,
    marginRight: 30,
    marginLeft: 30,
    borderRadius: 5,
  },

  categoryTxt: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "jostlight",
    letterSpacing: 0.5,
  },

  cardContainer: {
    flexGrow: 1,
    margin: 10,
    marginLeft: 30,
    marginRight: 30,
  },

  card: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontFamily: "abrilfatface",
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1.5,
  },

  body: {
    fontSize: 12,
    lineHeight: 12 * 1.5,
    textAlign: "center",
    marginBottom: 10,
  },

  subCategoriesList: {
    marginTop: 8,
  },

  listContainer: {
    //tillfällig styling tills jag fixar senare.
    height: 400,
    width: 300,
    // flex: 1,
    // backgroundColor: "#eeedeb",
    backgroundColor: "rgba(238, 237, 235, 0.2)",
    borderColor: "rgba(238, 237, 235, 0.0)",
    borderRadius: 3,
    borderWidth: 1,
    //Shadows
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },

  listContent: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
