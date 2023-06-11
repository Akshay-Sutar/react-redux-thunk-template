import { TodoActions } from "../constants/TodoActionConstants";
import axios from "axios";

export const fetchTodos = () => {
  return async (dispatch) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
    const todos = res.data.map((item) => {
      return { id: item.id, title: item.title, comments: [] };
    });
    dispatch({ type: TodoActions.ADD_TODO, payload: todos.slice(0,5) });
  };
};

export const removeTodo = (id) => {
  return async (dispatch) => {
    dispatch({ type: TodoActions.REMOVE_TODO, payload: id });
  };
};
