import { combineReducers } from "redux";
import Tasks from "./tasks";

const rootReducer = combineReducers({
  tasks: Tasks,
});

export default rootReducer;
