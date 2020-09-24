import React, { useContext, useState } from 'React'
import { BookContext } from '../Context/BookContext'


const BookForm = () =>{
  const { addBook } = useContext(BookContext)
  const [ title, setTitle] = useState('')
  const [ author, setAuthor] = useState('')
  return(

  )
}

export default BookForm