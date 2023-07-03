import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addCounter: (state) => {
      state.value += 1;
    },
    mius: (state) => {
      state.value -= 1;
    },
  },
});

export default counterSlice.reducer; // 메인으로 합칠꺼

export const { addCounter, mius } = counterSlice.actions;
