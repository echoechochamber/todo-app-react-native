import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";

export const TodoListHeader = ({ onPress, taskCount }) => {
  return (
    <View
      style={{
        height: 120,
        paddingTop: 20,
        flexDirection: "row",
        alignItems: "stretch"
      }}
    >
      <View style={{ flex: 2 }}>
        <Text style={{ fontSize: 20, color: "rgba(0,0,0,.6)" }}>
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            day: "numeric",
            month: "short"
          })}
        </Text>
        <Text style={{ fontWeight: "bold", color: "#5b76e4", marginTop: 8 }}>
          {taskCount === 1 ? `1 Task` : `${taskCount} Tasks`}
        </Text>
      </View>

      <View style={{ flex: 1, alignItems: "center" }}>
        <TouchableOpacity onPress={onPress}>
          <Image
            source={require("./assets/button.png")}
            style={{ width: 50, height: 50 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoListHeader;
