import React from 'react';
import BookForm from '../containers/BookForm';
import BookList from '../containers/BookList';
import NavBar from '../containers/NavBar';

function App() {
  return (
    <div className="App bg-light">
    <NavBar />
      <div className="container my-5 py-5">
        <BookList />
        <BookForm />  
      </div>
    </div>
  );
}

export default App;
