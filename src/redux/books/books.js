/* eslint-disable */
import { createSlice, current } from '@reduxjs/toolkit';

export const initialState = {
  books: [],
};
const userSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    addBook: (state, action) => {
      [...current(state), { ...action.payload }];
    },
    /* deleteUser: (state, action) => {
      state.users.filter((user) => user.id !== action.payload.id);
      state.loading = false;
    }, */
  },
});
export const { addBook } = userSlice.actions;
export default userSlice.reducer;
