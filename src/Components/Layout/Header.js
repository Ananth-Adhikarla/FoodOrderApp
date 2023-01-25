import React from 'react'
import './Header.css'
import Container from '../UI/Container'
import CartButton from './CartButton'

const Header = props => {
  return (
    <header>
      <Container className='container-header'>
        <div className='left'>
          <h1>Moonbucks</h1>
        </div>
        <CartButton onClick={props.onClick} />
      </Container>
    </header>
  )
}

export default Header
