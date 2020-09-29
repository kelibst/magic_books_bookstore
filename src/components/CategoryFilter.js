import React from 'react'
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

const CategoryFilter = ( { handleFilterChange }) =>{
    return (
        <div>
        <p>Order by Caterogry</p>
        <select name="category" id="category" onChange={handleFilterChange}></select>
         <option value="All">All</option>
            { categories.map((category, index) => {
                <option value={category} key={index}>{category}</option>
            }) }  
        </div>
    )
}

CategoryFilter.propTypes = {
    handleFilterChange: PropTypes.func.isRequired,
};
  
export default CategoryFilter
