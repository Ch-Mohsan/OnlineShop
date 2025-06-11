import React, { useState, useRef, useEffect } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import './navbar.css'
import { FaUser, FaSearch, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { assets } from '../assets/frontend_images/assets';
import { useCart } from '../contextApi/CartContext';
import { useProduct } from '../contextApi/ProductContex';

function Navbar() {
  const [show, setShow] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const userMenuRef = useRef(null);
  const { totalItems } = useCart();
  const { toggleSearch } = useProduct();
  const navigate = useNavigate();

  // Close user menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchClick = () => {
    toggleSearch();
    navigate('/collections');
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src={assets.logo} alt="Logo" className="h-8 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              <NavLink to="/" className={({ isActive }) => 
                `text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-gray-900 font-semibold' : ''}`
              }>
                Home
              </NavLink>
              <NavLink to="/collections" className={({ isActive }) => 
                `text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-gray-900 font-semibold' : ''}`
              }>
                Collections
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => 
                `text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-gray-900 font-semibold' : ''}`
              }>
                Contact
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => 
                `text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-gray-900 font-semibold' : ''}`
              }>
                About
              </NavLink>
            </div>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={handleSearchClick}
                className="text-gray-700 hover:text-gray-900 p-2"
              >
                <FaSearch className="w-5 h-5" />
              </button>
              
              {/* User menu */}
              <div className="relative" ref={userMenuRef}>
                <button 
                  className="text-gray-700 hover:text-gray-900 p-2"
                  onClick={() => setShowUserMenu(!showUserMenu)}
                >
                  <FaUser className="w-5 h-5" />
                </button>
                
                {/* User dropdown - visible on click for mobile, hover for desktop */}
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link
                      to="/login"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowUserMenu(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowUserMenu(false)}
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>
              
              <Link to="/cart" className="text-gray-700 hover:text-gray-900 p-2 relative">
                <FaShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
              
              {/* Mobile menu button */}
              <button 
                className="sm:hidden text-gray-700 hover:text-gray-900 p-2"
                onClick={() => setShow(!show)}
              >
                {show ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`sm:hidden ${show ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
            <NavLink 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setShow(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/collections" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setShow(false)}
            >
              Collections
            </NavLink>
            <NavLink 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setShow(false)}
            >
              Contact
            </NavLink>
            <NavLink 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setShow(false)}
            >
              About
            </NavLink>
          </div>
        </div>
      </nav>
      {/* Add padding to prevent content from hiding behind fixed navbar */}
      <div className="h-16"></div>
    </>
  )
}

export default Navbar