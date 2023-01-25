import { useReducer } from 'react'
import CartContext from './CartContext'

const defaultCartState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      const newTotalPrice =
        state.totalPrice + action.item.quantity * action.item.price

      const newTotalQuantity = state.totalQuantity + action.item.quantity

      const existingCartItemIndex = state.items.findIndex(
        item => item.id === action.item.id
      )

      const existingCartItem = state.items[existingCartItemIndex]
      let newUpdatedItems

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + action.item.quantity
        }

        newUpdatedItems = [...state.items]
        newUpdatedItems[existingCartItemIndex] = updatedItem
      } else {
        newUpdatedItems = state.items.concat(action.item)
      }

      return {
        items: newUpdatedItems,
        totalQuantity: newTotalQuantity,
        totalPrice: newTotalPrice
      }
    }
    case 'REMOVE': {
      const existingCartItemIndex = state.items.findIndex(
        item => item.id === action.id
      )
      const existingItem = state.items[existingCartItemIndex]

      const newTotalPrice =
        state.totalPrice - existingItem.price < 0
          ? 0
          : state.totalPrice - existingItem.price
      const newTotalQuantity =
        state.totalQuantity - 1 < 0 ? 0 : state.totalQuantity - 1

      let newUpdatedItems
      if (existingItem.quantity === 1) {
        newUpdatedItems = state.items.filter(item => item.id !== action.id)
      } else {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity - 1
        }
        newUpdatedItems = [...state.items]
        newUpdatedItems[existingCartItemIndex] = updatedItem
      }
      return {
        items: newUpdatedItems,
        totalQuantity: newTotalQuantity,
        totalPrice: newTotalPrice
      }
    }
    default: {
      return state
    }
  }
}

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  )

  const addItemToCart = item => {
    dispatchCartAction({ type: 'ADD', item: item })
  }

  const removeItemFromCart = id => {
    dispatchCartAction({ type: 'REMOVE', id: id })
  }

  const cartContext = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    totalQuantity: cartState.totalQuantity,
    addItem: addItemToCart,
    removeItem: removeItemFromCart
  }

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  )
}

export default CartProvider
