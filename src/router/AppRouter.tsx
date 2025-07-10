import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home/Home'
import { ROUTES } from '../constants/routes'
import ProductDetails from '../pages/ProductDetails'
import Checkout from '../pages/Checkout'
const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path={ROUTES.PRODUCT} element={<ProductDetails/>}/>
                    <Route path={ROUTES.CHECKOUT} element={<Checkout/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
