const booksReducer = (state = {}, action) => {
  switch (action.payload) {
    case 'CREATE_BOOK':
      return {
        ...state,
        action,
      };
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
