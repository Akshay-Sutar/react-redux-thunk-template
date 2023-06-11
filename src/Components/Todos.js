import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, removeTodo } from "../store/actions/TodoActions";

export const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  const removeTodoItem = (id) => {
    dispatch(removeTodo(id)); 
  };

  return (
    <div>
      <h1>Todos</h1>
      {todos && (
        <ul>
          {todos.map((todo) => {
            return (
              <li onClick={(e) => removeTodoItem(todo.id)}>{todo.title}</li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
