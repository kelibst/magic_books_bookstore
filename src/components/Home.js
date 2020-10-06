import React from 'react';
import BookForm from '../containers/BookForm';
import BookList from '../containers/BookList';

const Home = () => (
  <div className="container my-5 py-5">
    <BookList />
    <BookForm />
  </div>
);

export default Home;
