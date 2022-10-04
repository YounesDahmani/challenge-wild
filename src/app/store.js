import { configureStore } from "@reduxjs/toolkit";
import argonautesReducer from "../feature/argonaute.slice";
export default configureStore({
  reducer: {
    argonautes: argonautesReducer,
  },
});
