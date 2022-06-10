import React from 'react'
import TextCard from '../textCards/TextCard'
import PersonImage from './tumblr_ps769izf231qzm1v9o2_r7_1280.jpg'
import "./userCard.css"

function UserCard() {
  return (
    <div className='user-card'>
        <TextCard userCard={true} text1='سلام، غزاله سلام پارمیدا' text2='+98 0919191991' icon={<img src={PersonImage} width="60" />} />
    </div>
  )
}

export default UserCard