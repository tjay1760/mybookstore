import { useSelector } from 'react-redux';
import BookDisplay from './BookDisplay';

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  return (
    <>
      <ul>
        {books.map((book) => (
          <li key={book.item_id}>
            <BookDisplay book={book} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default BookList;
