import React from 'react'
import HeaderImage from './Header.png'
import './header.css'
function Header() {
  return (
    <div className="header">
      <p>صفحه اصلی</p>
      <img src={HeaderImage} alt="" />
    </div>
  )
}

export default Header
