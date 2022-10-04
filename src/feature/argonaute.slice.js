import { createSlice } from "@reduxjs/toolkit";

export const argonauteSlice = createSlice({
  name: "argonautes",
  initialState: {
    argonautes: null,
  },
  reducers: {
    getArgonautes: (state, { payload }) => {
      state.argonautes = payload;
    },
    addArgonaute: (state, { payload }) => {
      state.argonautes.push(payload);
    },
    deleteArgonaute: (state, { payload }) => {
      state.argonautes = state.argonautes.filter((pic) => pic.id !== payload);
    },
  },
});

export const { getArgonautes, addArgonaute, deleteArgonaute } =
  argonauteSlice.actions;

export default argonauteSlice.reducer;
