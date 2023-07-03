import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todo.push(action.payload);
    },
    deleteTodo: (state, action) => {
      const temp = state.todo.filter((e) => {
        return e !== action.payload;
      });

      state.todo = temp;
    },
  },
});

export default todoSlice.reducer;

export const { addTodo, deleteTodo } = todoSlice.actions;
