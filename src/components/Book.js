import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { RemoveBook, FetchBooks } from '../redux/books/booksSlice';
import styles from './Book.module.css';

function Book({ bookProp, id }) {
  const dispatch = useDispatch();
  const ranPercentage = Math.floor(Math.random() * 100) + 1;
  const ranNumber = Math.floor(Math.random() * 10) + 1;
  const [error, setError] = useState(null);

  const handleRemoveBook = async () => {
    try {
      await dispatch(RemoveBook(id));
      await dispatch(FetchBooks());
    } catch (error) {
      setError('Error removing book. Please try again later.');
    }
  };

  return (
    <div className={styles.book}>
      <div className={styles['book-details']}>
        <div className={styles.maininfo}>
          <h4 className={styles.genre}>fiction</h4>
          <input
            type="text"
            className={styles.title}
            value={bookProp[0].title}
            readOnly
          />
          <h4 className={styles.author}>{bookProp[0].author}</h4>
          <div className={styles.actions}>
            <ul className={styles.actionsul}>
              <li className={styles.comment}>
                <button type="button" className={styles.action}>
                  Comment
                </button>
              </li>
              <li className={styles.remove}>
                <button
                  type="button"
                  onClick={handleRemoveBook}
                  className={styles.action}
                >
                  {' '}
                  Remove
                </button>
              </li>
              <li className={styles.edit}>
                <button type="button" className={styles.action}>
                  Edit
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.readstate}>
          <div className={styles.circle} />
          <article className={styles.statusdetails}>
            <h2>
              {ranPercentage}
              %
            </h2>
            <p className={styles.completed}>Completed</p>
          </article>
        </div>
        <div className={styles.currentchapter}>
          <p className={styles.chaptertitle}>CURRENT CHAPTER</p>
          <p>
            Chapter
            {' '}
            {ranNumber}
          </p>
          <button type="button" className={styles.update}>UPDATE PROGRESS</button>
        </div>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

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
