import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import TodoListItemCheckBox from "./TodoListItemCheckbox";

export const TodoListItem = ({ todo, onPress, onDelete }) => {
  const descriptionColor = todo.done ? "rgba(0,0,0,.3)" : "black";
  return (
    <View
      style={{
        flexDirection: "row",
        height: 50,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <TouchableOpacity
        onPress={onPress}
        style={{
          flex: 1,
          flexDirection: "row",
          marginRight: 4,
          alignItems: "center"
        }}
      >
        <TodoListItemCheckBox
          path={"M2.5 30.858 24.914 52.5 52.5 2.5"}
          checked={todo.done}
          color={"#5b76e4"}
          dimensions={50}
        />

        <Text style={{ flex: 1, color: descriptionColor }}>
          {todo.description}
        </Text>
        <Text style={{ color: "rgba(0,0,0,.3)" }}>
          {new Date(todo.due)
            .toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit"
            })
            .toLocaleLowerCase()
            .replace(" ", "")}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onDelete}
        style={{ alignItems: "center", justifyContent: "center", width: 20 }}
      >
        <Text style={{ color: "#5b76e4", textAlign: "center" }}>X</Text>
      </TouchableOpacity>
    </View>
  );
};
export default TodoListItem;
