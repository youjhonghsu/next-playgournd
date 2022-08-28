import { combineReducers } from "redux";
import counter from "@/store/counter/slice";

const rootReducer = combineReducers({
  counter
});

export default rootReducer;
