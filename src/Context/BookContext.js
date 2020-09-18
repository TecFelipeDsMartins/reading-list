import React, {createContext, useState} from 'react';
import uuid from 'uuid' 


export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    {title: 'bkabkabkabka', author:'babababbab' },
    {title: 'bkabkabkabka', author:'babababbab' }
  ])
  const addBook = (title, author) => {
      setBooks([...books,{title: title, author: author, id: uuid() }])
  }
  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id))
  }
  return(
    <BookContext.Provider value={books, addBook, removeBook}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider