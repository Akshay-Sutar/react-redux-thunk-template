import { combineReducers } from "redux";
import { CounterReducer } from "./counterReducer";
import { TodoReducer } from "./TodoReducer";

export const reducers = combineReducers({
  counter: CounterReducer,
  todo: TodoReducer,
});
