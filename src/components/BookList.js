/* eslint-disable */
import React, { useState } from 'react';
import Book from './Book';
import addUser, { addBook } from '../redux/books/books';
import { useSelector,useDispatch,connect } from 'react-redux';
import books from '../redux/books/books';
import { v4 as uuidv4 } from 'uuid';


const BookList = () => {
    const [booksstate, setbooksstate] = useState([]);
    const dispatch = useDispatch();
  
  const submitForm = (e) => {
      e.preventDefault();
    const title = e.target.querySelector('#title')
    const author = e.target.querySelector('#author')
    const newbook = {id:uuidv4(),title:title.value,author:author.value};
    title.value = '';
    author.value = '';
    dispatch(addBook(newbook));
    setbooksstate('hello')
  }
  const bookList = useSelector((state) => state.books)
  
  
  return (
    <div>
        {console.log(bookList)}
        
      <h1>Awesome Books</h1>
      
      <ul>

        {bookList.map((book) => (
          console.log(book)
        ))}
      </ul>
      <form id="add-book-form" onSubmit={(e) => submitForm(e)}>

        <input id='title' placeholder="Title" />
        <input id='author' placeholder="Author" />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default BookList;
