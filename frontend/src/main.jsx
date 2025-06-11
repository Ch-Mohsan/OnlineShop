import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ProductProvider } from './contextApi/ProductContex.jsx'
import { CartProvider } from './contextApi/CartContext.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <CartProvider>
          <App />
          <Toaster position="top-center" />
        </CartProvider>
      </ProductProvider>
    </BrowserRouter>
  </StrictMode>,
)
