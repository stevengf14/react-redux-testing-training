import { combineReducers } from "redux";
import { reducer as formReducer } from "react-redux";
import auth from "./auth";

export default combineReducers({
  auth,
  form: formReducer,
});
