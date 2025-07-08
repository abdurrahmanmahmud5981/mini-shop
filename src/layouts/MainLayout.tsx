import React from 'react'
import Navber from '../components/navigation/Navber'
import { Outlet } from 'react-router'

const MainLayout: React.FC = () => {
    return (
        <div className='min-h-screen bg-gray-50'>
            <Navber />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout
