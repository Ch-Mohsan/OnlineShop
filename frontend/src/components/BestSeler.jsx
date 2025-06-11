import React, { useEffect, useState } from 'react'
import Title from './Title'
import { useProduct } from '../contextApi/ProductContex'
import ProductItem from './ProductItem'

function BestSeler() {
  const { products, currency } = useProduct()
  const [BestProduct, setBestProduct] = useState([])

  useEffect(() => {
    const onlyBest = products.filter((item) => item.bestseller)
    setBestProduct(onlyBest.slice(0, 5))
  }, [products])

  return(<div className='my-10 w-full flex flex-col items-center px-4'>
  <Title text1="Our" text2="Best Seller" />
  <p className='text-gray-500 text-center max-w-xl mt-2 mb-6'>
    Discover our Best salles — a curated selection of stylish and comfortable pieces designed to elevate your everyday wardrobe.
  </p>

  <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-8 w-full max-w-7xl'>
    {BestProduct.map((item, index) => (
      <ProductItem
        key={index}
        id={item._id}
        name={item.name}
        image={item.image}
        price={item.price}
      />
    ))}
  </div>
</div>
)
}

export default BestSeler
