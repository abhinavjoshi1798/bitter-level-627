import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Category from '../Pages/Category'
import CategoryHome from '../Pages/CategoryHome'
const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category-home" element={<CategoryHome />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </div>
  )
}

export default MainRoute
