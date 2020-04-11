import * as axios from "axios";

const endpoint = "http://localhost:8000";
/* TOGGLE UI MODAL VISIBILITY */
export const TOGGLE_MODAL = "TOGGLE_MODAL";
export function toggleModal() {
  return { type: TOGGLE_MODAL };
}

export const REQUEST_IN_FLIGHT = "REQUEST_IN_FLIGHT";
export function requestTodos() {
  return { type: REQUEST_IN_FLIGHT };
}
/* LOAD TODOS */
export const RECEIVE_TODOS = "RECEIVE_TODOS";
export function receiveTodos(todos) {
  return { TYPE: RECEIVE_TODOS, todos };
}
// thunk to load todos
export function fetchTodos() {
  return function(dispatch) {
    dispatch(requestTodos());
    return axios.get(endpoint + "/todos").then(
      response => {
        dispatch(receiveTodos(response));
      },
      err => console.log(err)
    );
  };
}

/* ADD TODOS */
export function addTodo(data) {
  return function(dispatch) {
    dispatch(requestTodos());
    return axios.post(`${endpoint}/todos`, data).then(
      response => {
        dispatch(receiveTodos(response));
      },
      err => console.log(err)
    );
  };
}

/* TOGGLE COMPLETION */
export function completeTodo({ id }) {
  return function(dispatch) {
    dispatch(requestTodos());
    return axios.patch(`${endpoint}/todos/${id}/complete`, {}).then(
      response => {
        dispatch(receiveTodos(response));
      },
      err => console.log(err)
    );
  };
}

/* DELETE TODOS */
export function deleteTodo({ id }) {
  return function(dispatch) {
    dispatch(requestTodos());
    return axios.delete(`${endpoint}/todos/${id}`).then(
      response => {
        dispatch(receiveTodos(response));
      },
      err => console.log(err)
    );
  };
}

// initial state of the app 
const initialState = {
  todos: [],
  modalOpen: false,
  inFlight: false
};
export default function TodosReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_IN_FLIGHT:
      return { ...state, inFlight: true };
    case RECEIVE_TODOS:
      return { ...state, todos: action.todos };
    case TOGGLE_MODAL:
      return { ...state, modalOpen: !state.modalOpen };
    default:
      return state;
  }
}
