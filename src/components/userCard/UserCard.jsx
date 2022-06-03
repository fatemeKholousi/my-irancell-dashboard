import React from 'react'
import TextCard from '../textCards/TextCard'
import PersonImage from './person.png'
import "./userCard.css"

function UserCard() {
  return (
    <div className='user-card'>
        <TextCard userCard={true} text1='سلام، حسین احمدپناه' text2='+98 0919191991' icon={<img src={PersonImage}/>} />
    </div>
  )
}

export default UserCard