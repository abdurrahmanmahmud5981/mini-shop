import React from 'react'
import AppRouter from "./router/AppRouter"
import { CartProvider } from './context/CartContext'


const App: React.FC = () => {
  return (
    <CartProvider>
      <AppRouter />
    </CartProvider>
  )
}

export default App
