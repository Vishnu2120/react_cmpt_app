import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./Redux/crud/users/usersSlice";

export default configureStore({
  reducer: {
    users: usersReducer,
  },
});