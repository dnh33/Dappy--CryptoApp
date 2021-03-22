import React from 'react'
import HeroTextBlock from './HeroTextBlock'
import './HeroSection.scss'
import HeroImageBlock from './HeroImageBlock'

export default function HeroSection() {
  return (
    <div className="hero">
      <HeroTextBlock />
      <HeroImageBlock />
    </div>
  )
}
