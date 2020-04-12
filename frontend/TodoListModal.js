import React from "react";
import {
  StyleSheet,
  Modal,
  View,
  Text,
  TouchableOpacity,
  TextInput
} from "react-native";

const TodoListModal = ({
  modalOpen,
  onCancel,
  onSubmit,
  onChangeText,
  textValue
}) => {
  return (
    <Modal
      visible={modalOpen}
      transparent={true}
      presentationStyle={"overFullScreen"}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <View
          style={{
            flex: 0,
            backgroundColor: "white",
            width: "80%",
            height: 100,
            borderRadius: 12,
            padding: 8,
            borderColor: "black",
            borderWidth: 2
          }}
        >
          <Text>To do:</Text>
          <View>
            <TextInput
              onChangeText={onChangeText}
              value={textValue}
              style={{ borderColor: "gray", borderWidth: 1 }}
            />
          </View>
          {/* NOTE: here, we should add a DateTimePicker, I'm going to set  adefault and  */}
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 12,
              padding: 8
            }}
          >
            <TouchableOpacity onPress={onCancel}>
              <Text>CLOSE</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onSubmit}>
              <Text style={{ fontWeight: "bold", color: "#5b76e4" }}>DONE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TodoListModal;
