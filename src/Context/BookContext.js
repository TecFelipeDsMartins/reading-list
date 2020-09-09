import React, {createContext, useState} from 'react';
import uuid from 'uuid' 


export default BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    {title: 'bkabkabkabka', author:'babababbab' },
    {title: 'bkabkabkabka', author:'babababbab' }
  ])
  const addBook = (title, author) => {
      setBooks([...books,{title: title, author: author, id: uuid() }])
  }
}
