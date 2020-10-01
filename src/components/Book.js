import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProgressBar from './ProgressBar';

class Book extends Component { 

  render(){
    const { book, handleRemoveBook } = this.props
    
    return (
      <div className="card row align-items-center  flex-row my-2">
        <div className="col-6">
          <p>{book.id}</p>
          <h6>{book.category}</h6>
          <h4 className="card-title text-capitalize font-weight-bolder">{book.title}</h4>
          <div className="btn-container justify-self-space">
            <button type="button" className="btn border-0  btn-outline-danger" onClick={() => handleRemoveBook(book)}>Remove</button>
            <button type="button" className="btn border-0  btn-outline-primary" onClick={() => handleRemoveBook(book)}> Remove</button>
          </div>
        </div>
        <div className="col-6 d-flex align-items-center justify-content-between">
        <div className="col-6 d-flex mr-5 border-rightt justify-content-between align-items-center">
            <ProgressBar 
                  radius={ 50 }
                  stroke={ 4 }
                  progress={ book.id }
            />
            <div className="comp-container">
              <h2 className="text-center">{book.id} %</h2>
              <h6 className="text-secondary">Completed</h6>
            </div>
        </div>
           <div className="col-6">
                 <button type="button" className="btn btn-primary " onClick={() => handleRemoveBook(book)}>UPDATE PROGRESS</button>
           </div>
        </div>
    
      </div>
    );
  }
}
  

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
