import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchBooks } from '../redux/books/booksSlice';
import Book from './Book';

const BookList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchBooks());
  }, [dispatch]);

  const books = useSelector((state) => state.books.books);
  const isLoading = useSelector((state) => state.books.isLoading);

  return (
    <>
      {isLoading ? <div>Loading...</div> : (
        <ul>
          {books && Object.entries(books).map(([bookId, bookData]) => (
            <li key={bookId}>
              <Book book={bookData} id={bookId} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default BookList;
