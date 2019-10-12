import { combineReducers } from "redux";

//importing other reducers
import AuthReducer from "./auth-reducer";

const rootReducer = combineReducers({
  auth: AuthReducer
});

export default rootReducer;
