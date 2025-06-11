import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useProduct } from '../contextApi/ProductContex'
import { useCart } from '../contextApi/CartContext'
import { FaStar, FaShoppingCart, FaShare } from 'react-icons/fa'
import { toast } from 'react-hot-toast'

function ProductDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { products, currency } = useProduct()
  const { addToCart } = useCart()
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null)
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const foundProduct = products.find(p => p._id === id)
    if (foundProduct) {
      setProduct(foundProduct)
    } else {
      navigate('/collections')
    }
  }, [id, products, navigate])

  const handleAddToCart = () => {
    if (product.sizes && !selectedSize) {
      toast.error('Please select a size')
      return
    }
    if (product.colors && !selectedColor) {
      toast.error('Please select a color')
      return
    }

    addToCart(product, quantity, selectedSize, selectedColor)
    toast.success('Added to cart successfully!')
  }

  const handleBuyNow = () => {
    if (product.sizes && !selectedSize) {
      toast.error('Please select a size')
      return
    }
    if (product.colors && !selectedColor) {
      toast.error('Please select a color')
      return
    }

    // Add to cart first, then navigate to place order
    addToCart(product, quantity, selectedSize, selectedColor);
    navigate('/place-order');
  };

  const handleShare = async () => {
    const shareData = {
      title: product.name,
      text: product.description,
      url: window.location.href
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        // Fallback for browsers that don't support Web Share API
        await navigator.clipboard.writeText(window.location.href)
        toast.success('Link copied to clipboard!')
      }
    } catch (error) {
      console.error('Error sharing:', error)
      toast.error('Failed to share product')
    }
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100">
            <img
              src={product.image[selectedImage]}
              alt={product.name}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.image.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 
                  ${selectedImage === index ? 'ring-2 ring-gray-900' : ''}`}
              >
                <img
                  src={img}
                  alt={`${product.name} - view ${index + 1}`}
                  className="h-full w-full object-cover object-center"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <div className="mt-2 flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <FaStar
                    key={rating}
                    className={`h-5 w-5 flex-shrink-0 ${
                      rating < product.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="ml-2 text-sm text-gray-500">
                {product.reviews} reviews
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-3xl font-bold text-gray-900">
              {currency}{product.price}
            </p>
            <p className="text-base text-gray-500">{product.description}</p>
          </div>

          {/* Size Selection */}
          {product.sizes && (
            <div>
              <h3 className="text-sm font-medium text-gray-900">Size</h3>
              <div className="mt-2 grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`border rounded-md py-2 px-3 text-sm font-medium transition-colors
                      ${selectedSize === size 
                        ? 'border-gray-900 bg-gray-900 text-white' 
                        : 'border-gray-300 hover:bg-gray-50'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Color Selection */}
          {product.colors && (
            <div>
              <h3 className="text-sm font-medium text-gray-900">Color</h3>
              <div className="mt-2 flex space-x-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 transition-transform
                      ${selectedColor === color ? 'scale-110 ring-2 ring-gray-900' : 'border-gray-300'}`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Quantity Selection */}
          <div>
            <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
            <div className="mt-2 flex items-center space-x-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="rounded-md border border-gray-300 p-2 hover:bg-gray-50"
              >
                -
              </button>
              <span className="text-gray-900">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="rounded-md border border-gray-300 p-2 hover:bg-gray-50"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col space-y-4">
            <button 
              onClick={handleAddToCart}
              className="flex items-center justify-center rounded-md border border-transparent bg-gray-900 px-8 py-3 text-base font-medium text-white hover:bg-gray-800 transition-colors"
            >
              <FaShoppingCart className="mr-2" />
              Add to Cart
            </button>
            <button 
              onClick={handleBuyNow}
              className="flex items-center justify-center rounded-md border border-gray-300 px-8 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Buy Now
            </button>
            <div className="flex space-x-4">
              <button 
                onClick={handleShare}
                className="flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors w-full"
              >
                <FaShare className="mr-2" />
                Share
              </button>
            </div>
          </div>

          {/* Product Details */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-sm font-medium text-gray-900">Details</h3>
            <div className="mt-2 space-y-4 text-sm text-gray-500">
              <p>{product.details}</p>
              <ul className="list-disc pl-4 space-y-2">
                {product.features?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails 