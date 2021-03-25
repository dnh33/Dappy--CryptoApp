import React from 'react'
import './HeroTextBlock.scss'

export default function HeroTextBlock() {
  return (
    <div className="heroOne">
      <h1 className="heroOne__headline">
        Create your first
        <br />
        decentralized wallet
      </h1>
      <h2 className="heroOne__subtitle">
        The easiest way to manage
        <br />
        multiple cryptocurrency assets
      </h2>
      <div className="heroOne__button">
        <a href="https://handcash.io/" alt="handcash link" target="_blank" rel="noreferrer"
          //eslint-disable-next-line
          onClick={gtag("event", "cta", "https://handcash.io/")}>create wallet</a>
      </div>
    </div>
  )
}
