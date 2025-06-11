import React from 'react'
import { useCart } from '../contextApi/CartContext'
import { useProduct } from '../contextApi/ProductContex'
import { FaTrash, FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Cart() {
  const { cart, totalAmount, removeFromCart, updateQuantity } = useCart()
  const { currency } = useProduct()

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
          <p className="text-gray-500 mb-8">Looks like you haven't added any items to your cart yet.</p>
          <Link 
            to="/collections" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800"
          >
            <FaArrowLeft className="mr-2" />
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={`${item.id}-${item.size}-${item.color}`} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                {/* Product Image */}
                <div className="w-24 h-24 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-grow">
                  <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                  <div className="mt-1 text-sm text-gray-500">
                    {item.size && <span className="mr-2">Size: {item.size}</span>}
                    {item.color && <span>Color: {item.color}</span>}
                  </div>
                  <div className="mt-2 flex items-center">
                    <button
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1), item.size, item.color)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      -
                    </button>
                    <span className="mx-2 text-gray-900">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1, item.size, item.color)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Price and Remove */}
                <div className="flex flex-col items-end gap-2">
                  <p className="text-lg font-medium text-gray-900">
                    {currency}{item.price * item.quantity}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id, item.size, item.color)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>{currency}{totalAmount}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between text-lg font-medium text-gray-900">
                  <span>Total</span>
                  <span>{currency}{totalAmount}</span>
                </div>
              </div>
            </div>

            <button className="w-full mt-6 bg-gray-900 text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-colors">
              Proceed to Checkout
            </button>

            <Link 
              to="/collections" 
              className="mt-4 flex items-center justify-center text-gray-600 hover:text-gray-900"
            >
              <FaArrowLeft className="mr-2" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart