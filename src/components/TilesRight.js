import React from 'react'
import { ReactComponent as MultiCurrencies } from '../img/multicurrys.svg'
import './TilesRight.scss'

export default function TilesRight() {
  return (
    <div className="tiles__right">
      <div className="tiles__four">
      <h1 className="tiles__four--headline">
        one digital currency, multiple tokenized economies
      </h1>
      <MultiCurrencies className="tiles__four--img"/>
      <p className="tiles__four--txt">
      Receive, send and store the most popular tokens, like
      <br />
      Shua, REX1, USDC and lots more.
        </p>
      </div>

      <div className="tiles__five">
        <p className="tiles__five--txt">
        <br />
        </p>
      
      </div>

      <div className="tiles__six">
      <p className="tiles__six--txt">
        <br />
        </p>
      </div>
    </div>
  )
}
