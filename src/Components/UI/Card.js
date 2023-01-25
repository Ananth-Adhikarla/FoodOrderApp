import React from 'react'
import Container from './Container'
import './Card.css'

const Card = ({ className = '', children }) => {
  return (
    <Container className={className === '' ? '' : className}>
      <div className='Card'>{children}</div>
    </Container>
  )
}

export default Card
