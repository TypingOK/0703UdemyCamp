import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import authSlice from "./authSlice";
import todoSlice from "./todoSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    login: authSlice,
    todo: todoSlice,
    carts: cartSlice,
  },
});

export default store;
