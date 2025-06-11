import React from 'react'
import { Link } from 'react-router-dom'
import { useProduct } from '../contextApi/ProductContex'

function ProductItem({ id, name, image, price }) {
    const {currency}=useProduct()
  return (
    <Link to={`/product/${id}`} className="group">
      <div className='text-gray-700 w-44 sm:w-48 md:w-52 lg:w-56 xl:w-60'>
        <div className='w-full h-64 overflow-hidden rounded-lg bg-gray-100'>
          <img
            src={image[0]}
            alt={name}
            className='w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110'
          />
        </div>
        <div className="mt-4 space-y-1">
          <h3 className="text-sm font-medium text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">{currency}{price}</p>
        </div>
      </div>
    </Link>
  )
}

export default ProductItem
