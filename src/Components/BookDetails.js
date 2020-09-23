import React,  { useContext } from 'react'
import { BookContext } from '../Context/BookContext'

const BookDetails = () =>{
  const { books } = useContext(BookContext)
  return books.length ? (
    <div>
      <ul>
        {books.map( book =>
          return(
            <BookDetails title={book.title} Key={book.id}
          )
        }
      </ul>
    </div>
    ) : (
    <div> Sem livros </div>
  )
} 

export default BookDetails