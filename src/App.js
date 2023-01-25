import { useState } from 'react'
import Header from './Components/Layout/Header'
import Hero from './Components/Layout/Hero'
import Menu from './Components/Menu/Menu'
import CartProvider from './Components/store/CartProvider'
import Cart from './Components/Cart/Cart'

function App () {
  const [showModal, setShowModal] = useState(false)

  const modalHandler = () => {
    setShowModal(!showModal)
  }

  return (
    <div className='App'>
      <CartProvider>
        {showModal && <Cart close={modalHandler} />}
        <Header onClick={modalHandler} />
        <Hero />
        <Menu />
      </CartProvider>
    </div>
  )
}

export default App
