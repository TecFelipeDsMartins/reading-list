import React, { useContext } from 'react'
import { BookContext } from './Context/BookContext'
const NavBar = () => {
  const {books} = useContext(BookContext)
  return(
    <div>
      <p>{books.length}</p>
    </div>
  )
}

export default NavBar