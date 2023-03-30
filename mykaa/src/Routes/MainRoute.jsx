import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Category from '../Pages/Category'
import CategoryHome from '../Pages/CategoryHome'
import Admin from '../Pages/admin'

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category-home" element={<CategoryHome />} />
        <Route path="/category" element={<Category />} />
        <Route path="/admin" element={<Admin />} />
        
      </Routes>
    </div>
  )
}

export default MainRoute
