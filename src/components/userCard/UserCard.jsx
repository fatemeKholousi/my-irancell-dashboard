import React from 'react'
import TextCard from '../textCards/TextCard'
import PersonImage from './profile.jpg'
import "./userCard.css"

function UserCard() {
  return (
    <div className='user-card'>
        <TextCard userCard={true} text1='سلام، فاطمه' text2='+98 0919191991' icon={<img src={PersonImage} width="60" />} />
    </div>
  )
}

export default UserCard