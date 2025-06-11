import React from 'react'
import { useProduct } from './ProductContex'
import { FaSearch, FaTimes } from 'react-icons/fa'

const Search = () => {
    const { searchQuery, setSearchQuery, isSearchVisible, toggleSearch } = useProduct()

    if (!isSearchVisible) return null

    return (
        <div className="w-full max-w-md mx-auto mb-8">
            <div className="relative">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="w-full px-4 py-2 pl-10 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                {searchQuery && (
                    <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                        <FaTimes className="w-4 h-4" />
                    </button>
                )}
            </div>
        </div>
    )
}

export default Search
