/* eslint-disable */
import { useSelector, useDispatch } from 'react-redux';
import React from 'react'
import Book from './Book';

const BookOutput = () => {
    const bookList = useSelector((state) => state.booksReducer);
    return (
        <ul>
            {bookList.map((book) => (

          <li>hello</li>
        ))}
        </ul>
    )
}

export default BookOutput
