import { combineReducers } from "redux";
import trackReducer from "./Tracking/reducer";

export default combineReducers({
  data: trackReducer,
});
