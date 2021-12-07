/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  books: [],
  loading: false,
  error: false,
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
export const { createUser, deleteUser, getUser } = userSlice.actions;
export default userSlice.reducer;
