import React from 'react'
import HeaderImage from './Header.png'
import './header.scss'

function Header() {
  return (
    <div className="header">
      <p>صفحه اصلی</p>
      <img src={HeaderImage} alt="header" />
    </div>
  )
}

export default Header
