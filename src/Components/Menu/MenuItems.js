import React, { useContext, useState } from 'react'
import CartContext from '../store/CartContext'
import './MenuItems.css'

const MenuItems = props => {
  const [qtyAmount, setAmount] = useState(1)
  const cartContext = useContext(CartContext)

  const QuantityChange = event => {
    setAmount(event.target.value)
  }

  const addToCart = quantity => {
    cartContext.addItem({
      id: props.id,
      title: props.title,
      quantity: +quantity,
      price: props.price
    })
  }

  return (
    <div className='MenuItems'>
      <div className='Left'>
        <span className='textTitle'> {props.title} </span>
        <span className='textSmall'> {props.desc} </span>
        <span className='textPrice'> {`$${props.price.toFixed(2)}`} </span>
      </div>
      <div className='Right'>
        <div className='amount'>
          <span className='textSmall'> Qty </span>
          <input
            type='number'
            min='0'
            max='100'
            step='1'
            value={qtyAmount}
            onChange={QuantityChange}
          />
        </div>
        <button className='itemAdd' onClick={() => addToCart(qtyAmount)}>
          Add
        </button>
      </div>
    </div>
  )
}

export default MenuItems
