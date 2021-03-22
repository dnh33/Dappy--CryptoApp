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
    <header>
      <nav>
        <div className="header--left">
          <DappyLogo />
          <ul>
            <li><a href="/">How it works</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Support</a></li>
          </ul>
        </div>
        <div className="header--right">
          <img src={twatter} alt="Twitter" />
          <img src={github} alt="Github" />
          <img src={reddit} alt="Reddit" />
          <img src={bsv} alt="Bitcoin Satoshi Vision" />
          <img src={coingeek} alt="Coingeek" />
        </div>
      </nav>
    </header>
  )
}
