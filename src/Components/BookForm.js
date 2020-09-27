import React, { useContext, useState } from 'react'
import { BookContext } from '../Context/BookContext'


const BookForm = () =>{
  const { addBook } = useContext(BookContext)
  const [ title, setTitle] = useState('')
  const [ author, setAuthor] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    addBook(title,author)
    setTitle('')
    setAuthor('')
  }
  return(
    <form onSubmit={handleSubmit}>
      <i class="fas fa-book fa-1x book-icon"></i>
      <input type="text" placeholder="Book here" value={title}
      onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="Author here" value={author}
      onChange={(e) => setAuthor(e.target.value)} required />
      
      <input className="submit-btn" type="submit" value="add book" />
    </form>
  )
}

export default BookForm