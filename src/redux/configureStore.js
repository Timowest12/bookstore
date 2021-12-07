import { configureStore } from '@reduxjs/toolkit';
import userSlice from './books/books';

export default configureStore({
  reducer: {
    books: userSlice,
  },
});
