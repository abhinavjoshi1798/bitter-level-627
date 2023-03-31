import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Category from '../Pages/Category'
import CategoryHome from '../Pages/CategoryHome'
import SingleProduct from '../0568/components/SingleProduct'
const MainRoute = () => {
  return (
		<div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/category-home' element={<CategoryHome />} />
				<Route path='/products' element={<Category />} />
				<Route path='/products/:id' element={<SingleProduct />} />
				<Route path='*' element={<h1>404 Not Found</h1>} />
			</Routes>
		</div>
  );
}

export default MainRoute
