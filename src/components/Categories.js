import React from 'react';
import BookForm from '../containers/BookForm';
import CategoryList from '../containers/CategoryList';

const Categories = () => (

  <div className="container my-5 py-5">
    <CategoryList />
    <BookForm />
  </div>
);

export default Categories;
