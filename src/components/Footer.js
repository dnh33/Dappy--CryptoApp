import React from 'react'
import './Footer.scss'
import twatter from '../img/twitter.png'
import github from '../img/github.png'
import reddit from '../img/reddit.png'
import bsv from '../img/bitcoin.png'
import coingeek from '../img/blockstack.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__about">

      </div>

      <div className="footer__contact">
        <h1 className="footer__contact--title">Newsletter</h1>
        <h2 className="footer__contact--email">
        hello@dappywallet.com
        </h2>
        <div className="footer__contact--SoMe">
          <a href="https://twitter.com/BitcoinAssn" ><img src={twatter} alt="Twitter" className="twatter" /></a>
          <a href="https://github.com/bitcoin-sv" ><img src={github} alt="Github" className="github" /></a>
          <a href="https://www.reddit.com/r/bitcoinsv/" ><img src={reddit} alt="Reddit" className="reddit" /></a>
          <a href="https://bitcoinsv.io/" ><img src={bsv} alt="Bitcoin Satoshi Vision" className="bitcorn" /></a>
          <a href="https://coingeek.com/" ><img src={coingeek} alt="Coingeek" className="coingeek" /></a>
        </div>
      </div>

      <div className="footer__newsletter">
        <h1 className="footer__newsletter--title">Newsletter</h1>
        <h2 className="footer__newsletter--subtitle">
          Please enter your e-mail if want to receive updates.
        </h2>
        <form class="Signup__form" id="newsletter">
          <input required id="email" type="email" placeholder="Your e-mail" />
          <button form="newsletter" type="submit" class="Signup__button">Get offers</button>
        </form>
      </div>
    </footer>
  )
}
