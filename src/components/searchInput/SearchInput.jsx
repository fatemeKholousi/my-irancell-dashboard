import React from 'react'
import { MdOutlineSearch } from "react-icons/md";
import "./searchInput.scss"

function SearchInput() {
  return (
    <div className='search-input'>
        <input type="text" placeholder='جستجو' />
        <MdOutlineSearch style={{color:'gray'}}/>
    </div>
  )
}

export default SearchInput