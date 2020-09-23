import React, { useContext } from 'react'
import { BookContext } from '../Context/BookContext'
import BookDetails from './BookDetails'

const BookList = () => {
  const { books } = useContext(BookContext)
  return books.length ? (
    <div className="book-list">
      <ol>
        {books.map( book => {
          return(<BookDetails book={book} key={book.id}/>)})
        }
      </ol>
    </div>
  ) : (
    <div className='empty'>Não existe livos para ler</div>
  )
}

export default BookList