import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    data: [
      { id: 0, completed: false, title: "Task" },
      { id: 1, completed: true, title: "Task" },
    ],
    isloading: false,
  },
  reducers: {
    onToggle(state, action) {
      state.data = state.data.map((value) =>
        value.id === action.payload.id
          ? { ...value, completed: !value.completed }
          : value
      );
    },
    onDelete(state, action) {
      state.data = state.data.filter((value) => value.id !== action.payload.id);
    },
  },
});

export const { onDelete, onToggle } = todoSlice.actions;

export default todoSlice.reducer;
