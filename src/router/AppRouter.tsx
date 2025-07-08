import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home/Home'
import { ROUTES } from '../constants/routes'
const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path={ROUTES.PRODUCT} element={`Product Details`}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
