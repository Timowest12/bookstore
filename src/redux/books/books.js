/* eslint-disable */

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';
const APIURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/G94NWY3g7VbzmV6vhi81/books';

const initialState = [];


// Before Start Check The API Calls which located below.
// This Part is Your Old Actions. They are not suitable for side-effects like api calls.
// export const addBook = (payload) => ({
//   type: ADD_BOOK,
//   payload,
// });
// export const removeBook = (payload) => ({
//   type: REMOVE_BOOK,
//   payload,
// });
// export const getBooks = (payload) => ({
//   type: GET_BOOKS,
//   payload,
// });

// This one is the thing we talked on meeting. You need use here api calls. For example. Payload is the data 
// that user input. You are taking that data and posting it to the api, as i understand you need to dispatch
// it to our state
export const addBook = (payload) => async (dispatch) => {
  await apiCalls.addBookToApi(payload);
  dispatch({
    type: ADD_BOOK,
    payload, // This means actually payload: payload(argument)
  });
};
// You can implement this one according to addBook
export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});
// This one is the most complicated action for me I struggled a lot on this but the basic idea is
// When a payload come this function as parameter you need to also send that data to the API.
// But the thing is we need to get data from api so we will just show the values from api
// So we will not input any payload here
// We will just get the data from api and dispatch it in our reducer.
export const getBooks = () => async (dispatch) => {
  const dataFromApi = await getBooksList();
  // As i said we dont get any payload from the user. But we need to send it to the redux so in
  // this case we need to determine our payload which we will send it to the reducer
  const payload = Object.entries(dataFromApi).map(([key, value]) => {
    const [books] = value;
    return {
      item_id: key,
      ...books,
    }});
  dispatch({
    type: GET_BOOKS,
    payload,
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    case GET_BOOKS:
      return [...state, ...action.payload]; // here we are sending initialstate and action(GETBOOKS).payload(data that we get from api)
    default:
      return state;
  }
};

// Make API Calls

// Get ALL Books
export const getBooksList = async () => {
  const request = await fetch(APIURL);
  return request;
};

//Post A Book
export const postBook = (newBook) => {
  fetch(APIURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    // body: JSON.stringify(newBook), This Should Be Match The Pattern That Microverse Gave
    // Change your_... as your object key names
    body: JSON.stringify({
      item_id: newBook.your_id,
      title: newBook.your_title,
      category: newBook.your_category
    })
  })
}

export const deleteBook =  async (id) => {
  await fetch(`${APIURL}/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export default reducer;