import { Home, ShoppingCart, Store } from 'lucide-react';
import React from 'react'
import { ROUTES } from '../../constants/routes.ts'
import { NavLink } from 'react-router';
import type { CartItems } from '../../types/index.ts';


interface NavbarProps {
    cartItemCount: CartItems[];
    onToggleCart: () => void;
}
const Navber: React.FC<NavbarProps> = ({
    cartItemCount,
    onToggleCart
}) => {
    return (
        <nav className="bg-white shadow-lg sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-8">
                        <NavLink to={ROUTES.HOME} className="flex-shrink-0 flex items-center space-x-2">
                            <Store className="w-8 h-8 text-gray-600" />
                            <h1 className="text-2xl font-bold text-gray-900">Mini Shop</h1>
                        </NavLink>

                    </div>

                    <div className="flex items-center gap-3.5">
                        <div className="hidden md:block ">
                            <div className=" flex items-baseline space-x-4">
                                <NavLink
                                    to={ROUTES.HOME}
                                    className={({ isActive }) =>
                                        isActive ? "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-2 bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-2"
                                    }

                                >
                                    <Home size={16} />
                                    <span>Home</span>
                                </NavLink>
                            </div>
                        </div>
                        <button
                            onClick={onToggleCart}
                            className="relative p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors duration-200"
                        >
                            <ShoppingCart size={24} />
                            {cartItemCount.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-medium">
                                    {cartItemCount.length}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navber
