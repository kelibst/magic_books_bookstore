import React from 'react';
import BookForm from '../containers/BookForm';
import BookList from '../containers/BookList';

function App() {
  return (
    <div className="App">
     <BookList />
     <BookForm />
    </div>
  );
}

export default App;
