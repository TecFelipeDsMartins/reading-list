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
    </form>
  )
}

export default BookForm