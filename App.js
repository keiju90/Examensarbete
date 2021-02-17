import React, { useState, useEffect } from "react";
import data from "./components/data";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
// import { StatusBar } from "expo-status-bar";
// import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

export default function App() {
  const [todos, setTodos] = useState([{ text: "Repot a plant", key: "1" }]);

  //FROM APP2
  const [currentIndex, setCurrentIndex] = useState(null);

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

  // useEffect(() => {
  //   const dataFromLocalStorage = localStorage.getItem("test");
  //   if (dataFromLocalStorage) {
  //     setTodos(JSON.parse(dataFromLocalStorage));
  //   }
  // }, []);

  // // runs after every time page renders, saves the current state to localstorage.
  // useEffect(() => {
  //   localStorage.setItem("test", JSON.stringify(todos));
  // });

  return (
    // APP
    // <View style={styles.containerr}>
    //   {/* <Header></Header>
    //   <App2></App2> */}
    //   <View style={styles.contentt}>
    //     <AddTodo submitHandler={submitHandler} />
    //     <View style={styles.listt}>
    //       <FlatList
    //         data={todos}
    //         //the data from state todos being rendered, one for every item.
    //         renderItem={({ item }) => (
    //           //passing presshandler function as a prop to todoitem.js
    //           <TodoItem todos={todos} item={item} pressHandler={pressHandler} />
    //         )}
    //       ></FlatList>
    //     </View>
    //   </View>

    /* // FOR APP2 */
    <View style={styles.container}>
      {/* <StatusBar hidden /> */}

      {/* iterates over every object (category) from data.js */}
      {data.map(({ bg, color, category, subCategories }, index) => {
        return (
          <TouchableOpacity
            key={category}
            onPress={() => {
              setCurrentIndex(index === currentIndex ? null : index);
            }}
            style={styles.cardContainer}
            activeOpacity={0.9}
          >
            {/* the card itself containing the category from data.js */}
            <View style={[styles.card, { backgroundColor: bg }]}>
              <Text style={[styles.heading, { color: color }]}>{category}</Text>
              {/* if index is currentindex, show items  */}
              {index === currentIndex && (
                <View style={styles.subCategoriesList}>
                  {subCategories.map((subCategory) => (
                    <Text key={subCategory} style={[styles.body, { color }]}>
                      {subCategory}
                    </Text>
                  ))}
                  {/* This is the original app code from this file moved here */}
                  <View style={styles.listContainer}>
                    <View style={styles.listContent}>
                      <AddTodo submitHandler={submitHandler} />
                      <View style={styles.list}>
                        <FlatList
                          data={todos}
                          //the data from state todos being rendered, one for every item.
                          renderItem={({ item }) => (
                            //passing presshandler function as a prop to todoitem.js
                            <TodoItem
                              todos={todos}
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
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  // FOR APP2
  container: {
    flex: 1,
    backgroundColor: "pink",
    justifyContent: "center",
  },

  cardContainer: {
    flexGrow: 1,
  },

  card: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
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
