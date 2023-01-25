import React, { useContext, useState, useEffect } from 'react'
import './CartButton.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import CartContext from '../store/CartContext'

const CartButton = props => {
  const [qtyFlash, setqtyFlash] = useState(false)
  const cartContext = useContext(CartContext)

  const { items, totalQuantity } = cartContext

  useEffect(() => {
    if (items.length <= 0) {
      return
    }

    setqtyFlash(true)

    const timer = setInterval(() => {
      setqtyFlash(false)
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [items, totalQuantity])

  return (
    <button onClick={props.onClick}>
      <ShoppingCartIcon style={{ fontSize: 24, position: 'relative' }} />
      <span className='text hide-text'>Your Cart</span>
      <span className={`qty text ${qtyFlash ? 'qtyFlashBG' : ''}`}>
        {totalQuantity}
      </span>
    </button>
  )
}

export default CartButton
