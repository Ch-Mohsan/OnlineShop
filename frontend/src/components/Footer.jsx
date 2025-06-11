import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <img src="src/assets/frontend_images/logo.png" alt="Company Logo" className="w-24 mb-4" />
            <p className="text-gray-600 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempore enim earum a expedita, 
              provident reprehenderit unde incidunt amet mollitia!
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-800 text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About Us</a></li>
              <li><a href="/collections" className="text-gray-600 hover:text-gray-900 transition-colors">Collections</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-gray-800 text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Return & Exchange</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-800 text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-gray-600">Address:</span>
                <span className="text-gray-600 ml-2">123 Fashion Street, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-600">Phone:</span>
                <a href="tel:+19212799800" className="text-gray-600 hover:text-gray-900 transition-colors ml-2">+1 (921) 279-9800</a>
              </li>
              <li className="flex items-center">
                <span className="text-gray-600">Email:</span>
                <a href="mailto:forever@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors ml-2">forever@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-200 pt-8 pb-6">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-gray-800 text-lg font-semibold mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-gray-600 text-sm mb-4">Get the latest updates on new products and upcoming sales</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
              <button 
                type="submit" 
                className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-2 md:mb-0">
              &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer