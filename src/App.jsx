import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ExplorePage from './Pages/Explore'
import ProductDetails from './Pages/ProductDetails'
import CartItems from './Pages/CartList'

function App() {
  return (
      <Routes>
      <Route path="/" element={<ExplorePage />} />
      <Route path="/product-details/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<CartItems />} />
    </Routes>
  )
}

export default App
