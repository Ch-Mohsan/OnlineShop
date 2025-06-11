import React from 'react'
import './index.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import Collections from './pages/Collections';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ProductDetails from './pages/ProductDetails';
import PlaceOrder from './pages/PlaceOrder';

function App() {
  return (
    <div className='text-lg overflow-x-hidden flex flex-col gap-2'>
      <Navbar/>
         <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/place-order" element={<PlaceOrder />} />
      </Routes>
      <Footer/>
    </div>
    
  )
}

export default App