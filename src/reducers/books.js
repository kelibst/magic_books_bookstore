import { initData } from '../initData';
const booksReducer = (state = initData.books, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      console.log("curstate", state)
      return [...state, action.payload];
    case 'REMOVE_BOOK':
      console.log(state)
      return state.filter(book => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default booksReducer;
