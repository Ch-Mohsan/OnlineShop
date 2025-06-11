import { createContext, useContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_images/assets";
import { useLocation } from 'react-router-dom';

const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
    const currency = "$"
    const [searchQuery, setSearchQuery] = useState("")
    const [isSearchVisible, setIsSearchVisible] = useState(false)
    const location = useLocation()

    // Show search only on collections page
    useEffect(() => {
        if (location.pathname === '/collections') {
            setIsSearchVisible(true)
        } else {
            setIsSearchVisible(false)
            setSearchQuery("")
        }
    }, [location])

    const toggleSearch = () => {
        if (location.pathname === '/collections') {
            setIsSearchVisible(prev => !prev)
        }
    }

    return (
        <ProductContext.Provider value={{
            products,
            currency,
            searchQuery,
            setSearchQuery,
            isSearchVisible,
            toggleSearch
        }}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProduct = () => {
    return useContext(ProductContext)
}