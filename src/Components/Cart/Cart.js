import React, { useContext } from 'react'
import CartContext from '../store/CartContext'
import Modal from '../UI/Modal'
import CartItems from './CartItems'
import './Cart.css'

const Cart = props => {
  const cartContext = useContext(CartContext)
  const { items, totalPrice } = cartContext

  const cartItemRemoveHandler = id => {
    cartContext.removeItem(id)
  }

  const cartItemAddHandler = item => {
    cartContext.addItem({ ...item, amount: 1, quantity: 1 })
  }

  return (
    <Modal close={props.close}>
      {items.map(item => (
        <CartItems
          key={item.id}
          item={item}
          addItem={cartItemAddHandler}
          removeItem={cartItemRemoveHandler}
        />
      ))}
      <div className='totalPrice'>
        <span>Total Price</span>
        <span>{`$${totalPrice.toFixed(2)}`}</span>
      </div>
    </Modal>
  )
}

export default Cart
