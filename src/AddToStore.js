/* eslint-disable */
import { addBook } from "./redux/books/books"
import { useDispatch } from "react-redux";
export default  addToStore = (obj) => {
    const dispatch = useDispatch();
    dispatch(addBook(obj))
}