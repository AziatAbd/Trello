import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    // todo: todoSlice,
    user: userReducer,
    todo: todoSlice.reducer,
  },
});
