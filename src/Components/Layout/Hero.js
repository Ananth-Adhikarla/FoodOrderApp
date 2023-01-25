import React from 'react'
import Container from '../UI/Container'
import './Hero.css'

const Hero = () => {
  return (
    <>
      <div className='heroBG'></div>
      <Container className='container-hero'>
        <div className='hero'>
          <span className='mainText'>
            We don’t make your coffee. We make your day.
          </span>
          <span className='subText'>
            Pure coffee. Pure community. Pure experience.
          </span>
          <span className='subText underline'>
            Come and order Now. Checkout the menu below
          </span>
        </div>
      </Container>
    </>
  )
}

export default Hero
