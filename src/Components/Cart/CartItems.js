import React from 'react'
import './CartItems.css'

const CartItems = props => {
  return (
    <div className='MenuItems'>
      <div className='Left'>
        <span className='modalTitle'> {props.item.title} </span>
        <div className='modalPriceArea'>
          <span className='modalPrice'>{`$${props.item.price.toFixed(
            2
          )}`}</span>
          <span className='modalQty modalPrice'>
            <small>X</small> {props.item.quantity}
          </span>
        </div>
      </div>
      <div className='Right'>
        <button className='modalAdd' onClick={() => props.addItem(props.item)}>
          +
        </button>
        <button
          className='modalAdd'
          onClick={() => props.removeItem(props.item.id)}
        >
          -
        </button>
      </div>
    </div>
  )
}

export default CartItems
