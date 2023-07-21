import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { RemoveBook, FetchBooks } from '../redux/books/booksSlice';

const Book = ({ bookProp, id }) => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(null);

  const handleRemoveBook = async () => {
    try {
      await dispatch(RemoveBook(id));
      await dispatch(FetchBooks());
    } catch (error) {
      setErrorMessage('Failed to remove the book. Please try again later.');
    }
  };

  return (
    <>
      <div className="book-details">
        <h4 className="genre">fiction</h4>
        <input type="text" className="title" value={bookProp[0].title} readOnly />
        <h4 className="author">{bookProp[0].author}</h4>
      </div>
      <div className="actions">
        <ul>
          <li><button type="button">Comment</button></li>
          <li>
            <button
              type="button"
              onClick={handleRemoveBook}
            >
              {' '}
              Remove
            </button>
          </li>
          <li><button type="button">Edit</button></li>
        </ul>
      </div>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </>
  );
};

Book.propTypes = {
  bookProp: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;