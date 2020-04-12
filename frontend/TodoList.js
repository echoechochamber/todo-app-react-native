import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  completeTodo,
  deleteTodo,
  fetchTodos,
  toggleModal
} from "./reducers/todo";
import TodoListItem from "./TodoListItem";
import TodoListModal from "./TodoListModal";
import TodoListHeader from "./TodoListHeader";

export const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const inFlight = useSelector(state => state.inFlight);
  const modalOpen = useSelector(state => state.modalOpen);
  const dispatch = useDispatch();

  const [text, onChangeText] = useState("");

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  const closeModal = () => {
    onChangeText("");
    dispatch(toggleModal());
  };

  const submitModal = () => {
    const newTodo = {
      description: text,
      done: false,
      /* NOTE: due date defaults to 1 hour from now to save time on implementing date time picker */
      due: new Date(Date.now() + 60 * 60 * 1000)
    };
    dispatch(addTodo(newTodo));
    closeModal();
  };

  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        marginTop: 80,
        width: "90%",
        padding: 20,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16
      }}
    >
      <TodoListHeader
        onPress={() => dispatch(toggleModal())}
        taskCount={todos.length}
      />

      {/* LIST OF TODOS */}
      <ScrollView>
        {!inFlight && <ActivityIndicator />}
        {!!inFlight &&
          todos.map(val => (
            <TodoListItem
              key={val.id}
              todo={val}
              onPress={() => dispatch(completeTodo(val))}
              onDelete={() => {
                dispatch(deleteTodo(val));
              }}
            >
              {JSON.stringify(val)}
            </TodoListItem>
          ))}
      </ScrollView>

      <TodoListModal
        modalOpen={modalOpen}
        onCancel={closeModal}
        onSubmit={submitModal}
        textValue={text}
        onChangeText={text => onChangeText(text)}
      />
    </View>
  );
};
