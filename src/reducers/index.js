import authReducer from "./authReducer";
import searchReducer from "./searchReducer";
import { combineReducers } from "redux";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  search: searchReducer,
  errors: errorReducer
});

export default rootReducer;
