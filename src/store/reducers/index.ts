import { combineReducers } from "redux";
import { currentTaskReducer } from "./currentTaskReducer";
import { tasksReducer } from "./tasksReducer";

export const rootReducer = combineReducers({
  currentTask: currentTaskReducer,
  tasks: tasksReducer,
});
