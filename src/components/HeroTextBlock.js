import React from 'react'
import './HeroTextBlock.scss'

export default function HeroTextBlock() {
  return (
    <div className="heroOne">
      <h1 className="heroOne__headline">
        Create your first decentralized wallet
      </h1>
      <h2 className="heroOne__subtitle">
        The easiest way to manage multiple cryptocurrency assets
      </h2>
      <div className="heroOne__button">
        <p>create wallet</p>
      </div>
    </div>
  )
}
