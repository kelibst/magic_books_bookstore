import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => (
  <div className="card row align-items-center  flex-row my-2">
    <div className="col-6">
      <p>{book.id}</p> <h6>{book.category}</h6>
      <h4 className="card-title text-capitalize font-weight-bolder">{book.title}</h4>
      <div className="btn-container justify-self-space">
      <button type="button" className="btn border-0  btn-outline-danger" onClick={() => handleRemoveBook(book)}>Remove</button>
      <button type="button" className="btn border-0  btn-outline-primary" onClick={() => handleRemoveBook(book)}> Edit</button>
      </div>
    </div>
    <div className="col-6">
      <button type="button" className="btn btn-primary" onClick={() => handleRemoveBook(book)}>Update Process</button>
    </div>
   
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
