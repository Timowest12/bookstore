/* eslint-disable */

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';
const APIURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/G94NWY3g7VbzmV6vhi81/books';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});
export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});
export const getBooks = (payload) => ({
  type: GET_BOOKS,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    case GET_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export const getBooksList = async (dispatch) => {
  fetch(APIURL)
    .then((response) => response.json())
    .then((data) => Object.entries(data).forEach((elem) => {
    let elemdata = elem[1][0]
    console.log(elemdata)
    
    }));
};

export const postBook = (newBook) => {
  console.log(newBook);
  fetch(APIURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBook),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

export const deleteBook = (id) => async (dispatch) => {
  await fetch(`${APIURL}/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  dispatch(removeBook(id));
};

export default reducer;
