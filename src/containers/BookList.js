import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BookList = ({ books }) => (
  <table className="table table-striped table-hover">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">title</th>
        <th scope="col">category</th>
      </tr>
    </thead>
    <tbody>
      {books.map(book => (
        <Book book={book} key={book.id} />
      ))}
    </tbody>
  </table>
);

const mapStateToProps = state => ({ books: state.books, filter: state.filter });

BookList.defaultProps = {
  books: [],
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
};

export default connect(mapStateToProps)(BookList);
