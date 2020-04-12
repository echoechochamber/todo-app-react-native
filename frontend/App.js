import React from "react";
import { StyleSheet, Text, View } from "react-native";
import todosReducer from "./reducers/todo";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import { TodoList } from "./TodoList.js";

const store = createStore(todosReducer, applyMiddleware(thunkMiddleware));

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <TodoList />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5b76e4",
    alignItems: "center",
    justifyContent: "center"
  }
});
