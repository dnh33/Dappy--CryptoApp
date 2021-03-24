import React from 'react'
import './Header.scss'
import twatter from '../img/twitter.png'
import github from '../img/github.png'
import reddit from '../img/reddit.png'
import bsv from '../img/bitcoin.png'
import coingeek from '../img/blockstack.png'
import { ReactComponent as DappyLogo } from '../img/Logo.svg'

export default function Header() {
  return (
    <>
    <header>
      <nav>
        <div className="flexContainer">
        <div className="header--left">
          <DappyLogo className="logo"/>
          <ul>
            <li><a href="https://bitcoinsv.academy/course/introduction-to-bitcoin-development"target="_blank" rel="noreferrer">How it works</a></li>
            <li><a href="https://coingeek.com/bitcoin-as-computer-theory-of-bitcoin-bitcoin-class-looks-at-matrix-operations-logic-and-microprocessors/"target="_blank" rel="noreferrer">Blog</a></li>
            <li><a href="/support">Support</a></li>
          </ul>
        </div>
        <div className="header--right">
          <a href="https://twitter.com/BitcoinAssn" target="_blank" rel="noreferrer"><img src={twatter} alt="Twitter" className="twatter" /></a>
          <a href="https://github.com/bitcoin-sv" target="_blank" rel="noreferrer"><img src={github} alt="Github" className="github" /></a>
          <a href="https://www.reddit.com/r/bitcoinsv/" target="_blank" rel="noreferrer"><img src={reddit} alt="Reddit" className="reddit" /></a>
          <a href="https://bitcoinsv.io/" target="_blank" rel="noreferrer"><img src={bsv} alt="Bitcoin Satoshi Vision" className="bitcorn" /></a>
          <a href="https://coingeek.com/" target="_blank" rel="noreferrer"><img src={coingeek} alt="Coingeek" className="coingeek" /></a>
        </div>
        </div>
      </nav>
    </header>
    </>
  )
}
