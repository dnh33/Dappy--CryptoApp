import React from 'react'
import { ReactComponent as MultiCurryImg } from '../img/multicurrys.svg'
import { ReactComponent as TokensImg } from '../img/tokens_5.svg'
import { ReactComponent as ExchangeImg } from '../img/exchange.svg'
import './TilesRight.scss'

export default function TilesRight() {
  return (
    <div className="tiles__right">
      <div className="tiles__four">
        <h1 className="tiles__right--headline">
          one digital currency, multiple tokenized economies
      </h1>
        <MultiCurryImg className="tiles__four--img" />
        <p className="tiles__four--txt">
          Receive, send and store the most popular tokens, like
          <br />
          Shua, REX1, USDC and lots more.
        </p>
      </div>

      <div className="tiles__five">
        <h1 className="tiles__right--headline">
          Tokens
      </h1>
        <TokensImg className="tiles__five--img" />
        <p className="tiles__five--txt">
          Full support for any BitCoin tokens on the RUN network.
          <br />
          Bitcoin tokens (SFPMB@0.1) is coming soon.
        </p>

      </div>

      <div className="tiles__six">
        <h1 className="tiles__six--headline">
          Exchange
      </h1>
        <p className="tiles__six--txt">
        In-app exchange is supported by Acorn, it
        <br />
        allows to convert tokens to each other in the most
        <br />
        intuitive and easiest way.
        </p>
        <ExchangeImg className="tiles__six--img" />

      </div>
    </div>
  )
}
