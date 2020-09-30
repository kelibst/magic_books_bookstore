import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { editBook, removeBook } from '../actions';

const BookList = props => {
  const { books, removeBook, editBook } = props;
  const handleRemoveBook = book => {
    removeBook(book);
  };
  const handleEditBook = (book) =>{
    editBook(book)
  }

  return (
    <div>
      <div className="container-fluid">
        <div>
          {books.map(book => (
            <Book book={book} key={book.id} handleEditBook={handleEditBook} handleRemoveBook={handleRemoveBook} />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
  editBook: book => dispatch(editBook(book))
});
BookList.defaultProps = {
  books: PropTypes.arrayOf(PropTypes.object),
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  removeBook: PropTypes.func.isRequired,
  editBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
