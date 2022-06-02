import React from 'react'
import HeaderImage from "../assets/images/header-img.png"

function HeaderCard() {
  return (
    <div className="header">
      <img src={HeaderImage} alt="img" style={{width:"100%"}} />
      <p>!اینهمه بسته بی‌سابقه‌ست</p>
      <span>!اینجا چه خبره</span>
    </div>
  )
}

export default HeaderCard