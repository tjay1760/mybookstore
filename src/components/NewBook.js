const NewBook = () => (
  <div className="add-book">
    <h1>ADD NEW BOOK</h1>
    <form>
      <input type="text" name="title" placeholder="Enter book title" />
      <input type="text" name="author" placeholder="Enter book author" />
      <button type="submit">ADD BOOK</button>
    </form>
  </div>
);

export default NewBook;
