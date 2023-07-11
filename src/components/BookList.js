import { useState } from 'react';
import BookDisplay from './BookDisplay';

const BookList = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'Thinking Fast and Slow',
      author: 'Daniel Kahneman',
    },
    {
      id: 2,
      title: 'Shetani Msalabani',
      author: 'Ngugi wa Thiong\'o',
    },
  ]);

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <BookDisplay book={book} onDelete={deleteBook} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default BookList;
