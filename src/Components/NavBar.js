import React, { useContext } from 'react'
import { BookContext } from '../Context/BookContext'

const NavBar = () => {
  const {books} = useContext(BookContext)
  return(
    <div>
      <p>{books}</p>
    </div>
  )
}

export default NavBar