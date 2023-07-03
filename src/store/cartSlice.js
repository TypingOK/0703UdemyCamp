import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
  counts: 0,
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addCart: (state, action) => {
      let list = state.carts;
      list.push(action.payload);
      state.carts = list;
      state.counts += 1;
    },
    deleteCart: (state, action) => {
      const temp = state.carts.filter((e) => {
        return e.index !== action.payload;
      });

      state.carts = temp;
    },
  },
});

export default cartSlice.reducer;

export const { addCart, deleteCart } = cartSlice.actions;
