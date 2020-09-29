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
  <div>
    <p>Order by Caterogry</p>
    <select name="category" id="category" onChange={handleFilterChange}>
      <option value="All">All</option>
      { categories.map(category => <option value={category} key={category}>{category}</option>) }
    </select>
  </div>
);

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
