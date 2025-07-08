import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from '../layouts/MainLayout'
const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout />}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
