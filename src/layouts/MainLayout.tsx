import React from 'react'
import Navber from '../components/navigation/Navber'
import { Outlet } from 'react-router'
import { useCartContext } from '../context/useCartContext';
import CartSidebar from '../components/cart/CartSidebar';
import { Footer } from '../components/layout/footer';

const MainLayout: React.FC = () => {
    const {
        cartItems,
        isCartOpen,
        removeFromCart,
        updateQuantity,
        closeCart,
        totalPrice,
        toggleCart
    } = useCartContext();
  
    return (
        <div className='min-h-screen bg-gray-50'>
            <Navber
                cartItemCount={cartItems}
                onToggleCart={toggleCart}
            />
            <main>
                <Outlet />
            </main>
            <Footer/>
            <CartSidebar
                isOpen={isCartOpen}
                onClose={closeCart}
                cartItems={cartItems}
                onUpdateQuantity={updateQuantity}
                onRemoveItem={removeFromCart}
                totalPrice={totalPrice}
            />
        </div>
    )
}

export default MainLayout
