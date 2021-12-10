/* eslint-disable */
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from "./redux/books/books"
export const fetchapi = () => {
    const dispatch = useDispatch();
    dispatch(addBook({category: 'thriller', title: '1'}));
    dispatch(addBook({category: 'thriller', title: '2'}));
    dispatch(addBook({category: 'thriller', title: '3'}));
}

