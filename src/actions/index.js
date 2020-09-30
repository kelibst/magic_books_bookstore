const createBook = book => ({
  type: 'CREATE_BOOK',
  payload: book,
});

const removeBook = book => ({
  type: 'REMOVE_BOOK',
  payload: book,
});

const filterChanges = (cat = 'All') => ({
  type: 'CHANGE_FILTER',
  payload: cat,
});

const editBook = book => ({
  type: 'EDIT_BOOK',
  payload: book,
});

export { createBook, removeBook, filterChanges, editBook };
