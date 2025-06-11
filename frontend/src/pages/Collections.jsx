import React, { useState, useEffect } from 'react'
import { useProduct } from '../contextApi/ProductContex'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import Search from '../contextApi/Search'

function Collections() {
  const { products, searchQuery } = useProduct()
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedTypes, setSelectedTypes] = useState([])
  const [sortBy, setSortBy] = useState('relevant')
  const [showCategoryFilter, setShowCategoryFilter] = useState(false)
  const [showTypeFilter, setShowTypeFilter] = useState(false)

  // Extract unique categories and types
  const categories = [...new Set(products.map(product => product.category))]
  const types = [...new Set(products.map(product => product.subCategory))]

  // Handle category filter
  const handleCategoryChange = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  // Handle type filter
  const handleTypeChange = (type) => {
    setSelectedTypes(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    )
  }

  // Apply filters, search, and sorting
  useEffect(() => {
    let result = [...products]

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase().trim()
      const searchTerms = query.split(' ').filter(term => term.length > 0)
      
      result = result.filter(product => {
        const searchableText = [
          product.name,
          product.category,
          product.subCategory,
          product.description
        ].map(text => text?.toLowerCase() || '').join(' ')

        return searchTerms.every(term => searchableText.includes(term))
      })
    }

    // Apply category filter
    if (selectedCategories.length > 0) {
      result = result.filter(product => selectedCategories.includes(product.category))
    }

    // Apply type filter
    if (selectedTypes.length > 0) {
      result = result.filter(product => selectedTypes.includes(product.subCategory))
    }

    // Apply sorting
    switch (sortBy) {
      case 'high-to-low':
        result.sort((a, b) => b.price - a.price)
        break
      case 'low-to-high':
        result.sort((a, b) => a.price - b.price)
        break
      default:
        // 'relevant' - keep original order
        break
    }

    setFilteredProducts(result)
  }, [products, selectedCategories, selectedTypes, sortBy, searchQuery])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Title text1="Our" text2="Collections" />
      
      {/* Search Component */}
      <Search />
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
        {/* Filters - Left Side */}
        <div className="lg:col-span-1 space-y-6">
          {/* Category Filter */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <button 
              onClick={() => setShowCategoryFilter(!showCategoryFilter)}
              className="w-full flex items-center justify-between text-lg font-medium text-gray-900 mb-4"
            >
              <span>Category</span>
              <span className="lg:hidden">
                {showCategoryFilter ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            <div className={`space-y-2 ${showCategoryFilter ? 'block' : 'hidden'} lg:block`}>
              {categories.map(category => (
                <label key={category} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                    className="rounded text-gray-900 focus:ring-gray-900"
                  />
                  <span className="text-gray-700">{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Type Filter */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <button 
              onClick={() => setShowTypeFilter(!showTypeFilter)}
              className="w-full flex items-center justify-between text-lg font-medium text-gray-900 mb-4"
            >
              <span>Type</span>
              <span className="lg:hidden">
                {showTypeFilter ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            <div className={`space-y-2 ${showTypeFilter ? 'block' : 'hidden'} lg:block`}>
              {types.map(type => (
                <label key={type} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes(type)}
                    onChange={() => handleTypeChange(type)}
                    className="rounded text-gray-900 focus:ring-gray-900"
                  />
                  <span className="text-gray-700">{type}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Products - Center */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredProducts.map((product) => (
              <ProductItem
                key={product._id}
                id={product._id}
                name={product.name}
                image={product.image}
                price={product.price}
              />
            ))}
          </div>
        </div>

        {/* Sort - Right Side */}
        <div className="lg:col-span-1">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Sort By</h3>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
            >
              <option value="relevant">Relevant</option>
              <option value="high-to-low">Price: High to Low</option>
              <option value="low-to-high">Price: Low to High</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collections