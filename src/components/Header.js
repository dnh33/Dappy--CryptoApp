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
            <li><a href="/">How it works</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Support</a></li>
          </ul>
        </div>
        <div className="header--right">
          <a href="https://twitter.com/BitcoinAssn" ><img src={twatter} alt="Twitter" className="twatter" /></a>
          <a href="https://github.com/bitcoin-sv" ><img src={github} alt="Github" className="github" /></a>
          <a href="https://www.reddit.com/r/bitcoinsv/" ><img src={reddit} alt="Reddit" className="reddit" /></a>
          <a href="https://bitcoinsv.io/" ><img src={bsv} alt="Bitcoin Satoshi Vision" className="bitcorn" /></a>
          <a href="https://coingeek.com/" ><img src={coingeek} alt="Coingeek" className="coingeek" /></a>
        </div>
        </div>
      </nav>
    </header>
    </>
  )
}
