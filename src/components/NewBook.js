import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/booksSlice';

const NewBook = () => {
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState({
    id: '',
    title: '',
    author: '',
  });
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setNewBook({
      ...newBook,
      [name]: value,
    });
  };
  return (
    <>
      <div className="add-book">
        <h1>ADD NEW BOOK</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addBook(newBook));
            setNewBook({
              title: '',
              author: '',
            });
          }}
        >
          <input
            type="text"
            name="title"
            placeholder="Enter book title"
            value={newBook.title}
            onChange={changeHandler}
          />
          <input
            type="text"
            name="author"
            placeholder="Enter book author"
            value={newBook.author}
            onChange={changeHandler}
          />
          <button type="submit">ADD BOOK</button>
        </form>
      </div>
      ;
    </>
  );
};

export default NewBook;
