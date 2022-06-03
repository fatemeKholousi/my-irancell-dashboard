import React from 'react'
import { MdOutlineSearch } from "react-icons/md";


function SearchInput() {
  return (
    <div className='search-input'>
        <input type="text" placeholder='جستجو' />
        <MdOutlineSearch/>
    </div>
  )
}

export default SearchInput