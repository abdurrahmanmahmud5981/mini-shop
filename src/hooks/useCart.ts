import { useCallback, useState } from "react"
import type { CartItems, Product } from "../types"

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItems[]>([])
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false)


  const addToCart = useCallback((product: Product) => {

    setCartItems(prev => {
      const existingItems = prev.find(item => item.product.id === product.id)
      if (existingItems) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { product, quantity: 1 }]
    })
  }, [])


  const removeFromCart = useCallback((productId: number) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId))
  }, [])

  const updateQuantity = useCallback((productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      ))
  }, [removeFromCart])

  
  const clearCart = useCallback(() => {
    setCartItems([])
  }, [])
  const toggleCart = useCallback(() => {
    setIsCartOpen(prev => !prev)
  }, [])
  const closeCart = useCallback(() => {
    setIsCartOpen(false)
  }, [])

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cartItems.reduce((sum, item) => sum + item.product.price, 0)

  return {
    cartItems,
    isCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleCart,
    closeCart,
    totalItems,
    totalPrice
  }
}