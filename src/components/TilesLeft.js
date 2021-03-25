import React from 'react'
import { ReactComponent as OpenSource } from '../img/opensauce.svg'
import { ReactComponent as Roadmap } from '../img/roadmap.svg'
import './TilesLeft.scss'

export default function TilesLeft() {
  return (
    <div className="tiles__left">
      <div className="tiles__one">
        <p className="tiles__one--txt">
          Dappy is a light wallet powered by RUN.network. It uses Faiä
        <br />
        decentralized storage and encryption option. Dappy doesn't
        <br />
        store or proceed user private key, the all data are securely
        <br />
        stored in the Faiä. Dappy was created by Taal and nChain who
        <br />
        believe in Satoshi Nakamoto's Vision.
        </p>
      </div>

      <div className="tiles__two">
        <h1 className="tiles__left--headline">
          Free and open source
        </h1>
        <OpenSource className="tiles__four--img" />
        <p className="tiles__two--txt">
        Fully open and transparent wallet. Our code is
        <br />
        <span className="big-txt">open source</span> and trusted by the Bitcoin community.
        </p>
      </div>
        <div className="tiles__three">
          <Roadmap />
        </div>
      </div>
  )
}
