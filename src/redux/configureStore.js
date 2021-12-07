/* eslint-disable */
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../redux/books/books";
export default configureStore({
 reducer: {
  books: userSlice,
 },
});