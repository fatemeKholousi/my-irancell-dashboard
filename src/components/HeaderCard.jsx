import React from 'react'
import HeaderImage from "../assets/images/header-img.png"

function HeaderCard() {
  return (
    <div className="header">
      <img src={HeaderImage} alt="img" />
      <p>!اینهمه بسته بی‌سابقه‌ست</p>
      <span>!اینجا چه خبره</span>
    </div>
  )
}

export default HeaderCard