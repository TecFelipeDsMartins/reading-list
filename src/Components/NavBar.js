import React, { useContext } from 'react'
import { BookContext } from '../Context/BookContext'

const NavBar = () => {
  const {books} = useContext(BookContext)
  let num  = 0
  return(
    <div>
      <p>You have {books.length} books</p>
    </div>
  )
}

export default NavBar