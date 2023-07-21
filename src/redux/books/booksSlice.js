import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  books: [],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    AddBook: (state, action) => {
      const { title, author } = action.payload;
      const newBook = {
        id: uuidv4(),
        title,
        author,
      };
      state.books = [...state.books, newBook];
    },
    RemoveBook: (state, { payload }) => {
      state.books = state.books.filter((bookitem) => bookitem.id !== payload);
    },
  },
});

export const { AddBook, RemoveBook } = bookSlice.actions;

export default bookSlice.reducer;
