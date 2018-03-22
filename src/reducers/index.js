import { combineReducers } from 'redux'
import BooksReducer from './reducer_books'
import ActiveBook from './reducer_active_book'

const rootReducer = combineReducers({
    //our key is books and our value is whatever gets returned from our booksreducer
    books: BooksReducer,
    activeBook: ActiveBook
})

export default rootReducer;