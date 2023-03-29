import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Category from '../Pages/Category'
const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </div>
  )
}

export default MainRoute
