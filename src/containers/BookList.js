import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook, filterChanges } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BookList = ({
  books, removeBook, filter, filterCategory,
}) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };
  const handleFilterChange = e => {
    e.preventDefault();
    const { value } = e.target;
    filterCategory(value);
  };
  return (
    <div>
      <CategoryFilter handleFilterChange={handleFilterChange} />
      <div className="container-fluid">
      
        <div>
          {books.filter(book => (filter === 'All' || book.category === filter)).map(book => (
            <Book book={book} key={book.id} handleRemoveBook={handleRemoveBook} />
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
  filterCategory: cat => dispatch(filterChanges(cat)),
});
BookList.defaultProps = {
  books: PropTypes.arrayOf(PropTypes.object),
  filter: 'All',
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.string,
  filterCategory: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
