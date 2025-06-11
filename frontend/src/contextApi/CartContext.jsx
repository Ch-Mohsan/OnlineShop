import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [totalItems, setTotalItems] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
    // Calculate totals
    const items = cart.reduce((total, item) => total + item.quantity, 0)
    const amount = cart.reduce((total, item) => total + (item.price * item.quantity), 0)
    setTotalItems(items)
    setTotalAmount(amount)
  }, [cart])

  const addToCart = (product, quantity = 1, selectedSize = null, selectedColor = null) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(
        item => 
          item.id === product._id && 
          item.size === selectedSize && 
          item.color === selectedColor
      )

      if (existingItem) {
        return prevCart.map(item =>
          item.id === product._id && item.size === selectedSize && item.color === selectedColor
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }

      return [...prevCart, {
        id: product._id,
        name: product.name,
        price: product.price,
        image: product.image[0],
        quantity,
        size: selectedSize,
        color: selectedColor
      }]
    })
  }

  const removeFromCart = (itemId, size = null, color = null) => {
    setCart(prevCart => 
      prevCart.filter(item => 
        !(item.id === itemId && item.size === size && item.color === color)
      )
    )
  }

  const updateQuantity = (itemId, quantity, size = null, color = null) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === itemId && item.size === size && item.color === color
          ? { ...item, quantity }
          : item
      )
    )
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{
      cart,
      totalItems,
      totalAmount,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
} 