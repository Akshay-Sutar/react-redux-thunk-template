import { TodoActions } from "../constants/TodoActionConstants";

const initState = {
  todos: [],
};

export const TodoReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case TodoActions.ADD_TODO:
      return { ...state, todos: payload };
    case TodoActions.REMOVE_TODO:
      const removedTodos = state.todos.filter((todo) => todo.id !== payload);
      return { ...state, todos: removedTodos };
    default:
      return { ...state };
  }
};
