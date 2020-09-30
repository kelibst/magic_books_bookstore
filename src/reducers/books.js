import { initData } from '../initData';

const booksReducer = (state = initData.books, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, action.payload];
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.payload.id);
    case 'EDIT_BOOK':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default booksReducer;
