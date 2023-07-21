import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddBook, FetchBooks } from '../redux/books/booksSlice';

const NewBook = () => {
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState({
    item_id: '',
    title: '',
    author: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inputErrors, setInputErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook({
      ...newBook,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};
    if (!newBook.title) {
      errors.title = 'Please enter the book title.';
    }
    if (!newBook.author) {
      errors.author = 'Please enter the book author.';
    }

    if (Object.keys(errors).length > 0) {
      setInputErrors(errors);
      return;
    }

    setIsSubmitting(true);

    try {
      await dispatch(AddBook(newBook));
      setNewBook({
        item_id: '',
        title: '',
        author: '',
      });
      await new Promise((resolve) => setTimeout(resolve, 1300));
      await dispatch(FetchBooks());
    } catch (error) {
      setInputErrors({ submitError: 'Error adding book. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="new-book-container">
      <h1>ADD NEW BOOK</h1>
      <form className="new-book-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Book title"
          value={newBook.title}
          onChange={handleInputChange}
          className={inputErrors.title ? 'error-input' : ''}
        />
        {inputErrors.title && <div className="error-message">{inputErrors.title}</div>}
        <input
          type="text"
          name="author"
          placeholder="Book author"
          value={newBook.author}
          onChange={handleInputChange}
          className={inputErrors.author ? 'error-input' : ''}
        />
        {inputErrors.author && <div className="error-message">{inputErrors.author}</div>}
        <button type="submit" className={`new-book-submit-btn ${isSubmitting ? 'submitting' : ''}`} disabled={isSubmitting}>
          {isSubmitting ? 'Adding...' : 'ADD BOOK'}
        </button>
        {inputErrors.submitError && <div className="error-message">{inputErrors.submitError}</div>}
      </form>
    </div>
  );
};

export default NewBook;
