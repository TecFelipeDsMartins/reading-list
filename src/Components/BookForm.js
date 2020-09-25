import React, { useContext, useState } from 'react'
import { BookContext } from '../Context/BookContext'


const BookForm = () =>{
  const { addBook } = useContext(BookContext)
  const [ title, setTitle] = useState('')
  const [ author, setAuthor] = useState('')
  return(
    <form>
      <input type="text" placeholder="Book here" value={title}
      onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="Author here" value={author}
      onChange={(e) => setAuthor(e.target.value)} required />
      <input type="submit" value="add book" />
    </form>
  )
}

export default BookForm