import PropTypes from 'prop-types';
import React from 'react';

const BookDisplay = ({ book, onDelete }) => (
  <>
    <div className="book-details">
      <h4 className="book-genre">fiction</h4>
      <input type="text" className="book-title" value={book?.title || ''} readOnly />
      <h4 className="book-author">{book.author || ''}</h4>
    </div>
    <div className="book-actions">
      <ul>
        <li>
          <button type="button">Comment</button>
        </li>
        <li>
          <button type="button" onClick={() => onDelete(book.id)}>
            Remove
          </button>
        </li>
        <li>
          <button type="button">Edit</button>
        </li>
      </ul>
    </div>
  </>
);

BookDisplay.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookDisplay;
