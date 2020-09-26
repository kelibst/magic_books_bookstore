import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions'


const BookList = ({ books, removeBook }) => {
  const handleRemoveBook = (book) => {
    removeBook(book);
  }
  return (
  <table className="table table-hover">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">Title</th>
        <th scope="col">Category</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody>
      {books.map(book => (
        <Book book={book} key={book.id} handleRemoveBook={handleRemoveBook}/>
      ))}
    </tbody>
  </table>
);

}

const mapStateToProps = state => ({ books: state.books });
const mapDispatchToProps = dispatch =>({
  removeBook: book => dispatch(removeBook(book))
})
BookList.defaultProps = {
  books: PropTypes.arrayOf(PropTypes.object),
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  removeBook: PropTypes.func.isRequired,
};



export default connect(mapStateToProps, mapDispatchToProps)(BookList);
