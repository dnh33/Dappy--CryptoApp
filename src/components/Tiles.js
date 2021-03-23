import React from 'react'
import './Tiles.scss'
import TilesLeft from './TilesLeft'
import TilesRight from './TilesRight'

export default function Tiles() {
  return (
    <div className="tiles">
      <TilesLeft />
      <TilesRight />
    </div>
  )
}
