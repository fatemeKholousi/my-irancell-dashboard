import React from 'react'
import AvatarCard from '../assets/images/avatar.png'

function InfoCard() {
  return (
    <div className="my-irancell-page info-card">
      <section>
        <h1>سلام، فاطمه خلوصی زائر</h1>
        <p>FatemeKholousiZaer@gmail.com</p>
      </section>

      <img src={AvatarCard} alt="avatar" width={62} height={62} />
    </div>
  )
}

export default InfoCard
