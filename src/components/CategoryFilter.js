import React from 'react';
import PropTypes from 'prop-types';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-fi',
];

const CategoryFilter = ({ handleFilterChange }) => (
  <div className="bg-white py-3">
    <h4 className="text-center font-weight-bolder my-2">Group Books by Caterogry</h4>
    <select name="category" id="category" className="category" onChange={handleFilterChange}>
      <option value="All">All</option>
      { categories.map(category => <option value={category} key={category}>{category}</option>) }
    </select>
  </div>
);

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
