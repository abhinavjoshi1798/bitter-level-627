import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Category from '../Pages/Category'
import CategoryHome from '../Pages/CategoryHome'

import SingleProduct from '../0568/components/SingleProduct'
import Admin from '../Pages/admin'
import Allroutes from '../0855/Components/Allroutes'
import CartPage from '../0568/Cart/CartPage'
import Payment from '../0568/utils/Payment.jsx'
import { UserAuthContextProvider } from "../1265/src/context/UserAuthContext"
import Login from "../1265/src/components/Login"
import Signup from "../1265/src/components/Signup"
import ProtectedRoute from "../1265/src/components/ProtectedRoute"
 


const MainRoute = () => {
  return (
		<div>
			 <UserAuthContextProvider>
			<Routes>
				<Route path='/' element={
				    <ProtectedRoute><Home /></ProtectedRoute>
				} />
				<Route path='/category-home' element={<CategoryHome />} />
				<Route path='/products' element={<Category />} />
				<Route path='/products/:id' element={<SingleProduct />} />
				<Route path='/products/cart' element={<CartPage />} />
				<Route path='/products/cart/payment' element={<Payment />} />
				<Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
				<Route path='*' element={<h1>404 Not Found</h1>} />
				<Route
					path='/admin/*'
					element={
						<Admin>
							<Allroutes />
						</Admin>
					}
				/>
			</Routes>
			</UserAuthContextProvider>
		</div>
  );

}

export default MainRoute
