import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { AddBook } from '../redux/books/booksSlice';

const NewBook = () => {
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState({
    id: '',
    title: '',
    author: '',
  });
    <div className="add-book">
      <h1>ADD NEW BOOK</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        dispatch(AddBook(newBook));
        setNewBook({
          title: '',
          author: '',
        });
      }}
      >
        <input type="text" name="title" placeholder="Enter book title" value={newBook.title} />
        <input type="text" name="author" placeholder="Enter book author" value={newBook.author} />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>;
};

export default NewBook;
