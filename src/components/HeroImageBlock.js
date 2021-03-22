import React from 'react'
import './HeroImageBlock.scss'
import heroImage from '../img/heroImage.png'

export default function HeroImageBlock() {
  return (
    <div className="heroTwo__image">
      <img src={heroImage} alt="blockchain yo" />
    </div>
  )
}
