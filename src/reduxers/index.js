import { combineReducers } from "redux";
import AuthReducer from "./auth";
import DataReducer from "./dataReducer";

export default combineReducers({
  // menampung semua reducer
  Auth: AuthReducer,
  dataReducer: DataReducer, // ini untuk call function dari reducer
});
