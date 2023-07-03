import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
};

export const authSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuth = !state.isAuth;
    },
  },
});

export default authSlice.reducer;

export const { login } = authSlice.actions;
