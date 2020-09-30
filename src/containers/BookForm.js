/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { idGenerator } from '../initData';
import { createBook } from '../actions/index';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-fi',
];

const catDropDown = categories.map(category => (
  <option key={category} value={category}>
    {category}
  </option>
));
class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: categories[0],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    if (name === 'title') {
      this.setState({
        title: value,
      });
    } else if (name === 'category') {
      this.setState({
        category: value,
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, category } = this.state;
    const { createBook } = this.props;
    if (title) {
      createBook({ id: (idGenerator()), title, category });
      this.setState({
        title: '',
        category: categories[0],
      });
    }
  }

  render() {
    return (
      <form className="form-row" onSubmit={this.handleSubmit}>
        <div className="col">
          <input
            className="form-control"
            type="text"
            name="title"
            id="book-input"
            placeholder="Add new book"
            onChange={this.handleChange}
            value={this.state.title}
          />
        </div>
        <div className="col">
          <select className="form-control" value={this.state.category} name="category" onChange={this.handleChange}>
            <option value="" disabled>
              Category
            </option>
            {catDropDown}
          </select>
        </div>
        <div className="col">
          <button className="btn btn-primary mb-2" type="submit">
            create new book
          </button>
        </div>
      </form>
    );
  }
}

BookForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
});
export default connect(null, mapDispatchToProps)(BookForm);
