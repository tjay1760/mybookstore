import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { RemoveBook, FetchBooks } from '../redux/books/booksSlice';

const Book = ({ book, id }) => {
  const dispatch = useDispatch();
  const { title, author } = book;

  const handleRemoveBook = async () => {
    await dispatch(RemoveBook(id));
    await dispatch(FetchBooks());
  };

  return (
    <>
      <div className="book-details">
        <h4 className="book-genre">fiction</h4>
        <input type="text" className="book-title" value={title} readOnly />
        <h4 className="book-author">{author}</h4>
      </div>
      <div className="book-actions">
        <ul>
          <li>
            <button type="button" className="comment-btn">Comment</button>
          </li>
          <li>
            <button type="button" onClick={handleRemoveBook} className="remove-btn">
              Remove
            </button>
          </li>
          <li>
            <button type="button" className="edit-btn">Edit</button>
          </li>
        </ul>
      </div>
    </>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
