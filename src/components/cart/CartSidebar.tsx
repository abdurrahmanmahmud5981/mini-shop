import React from 'react'
import type { CartItems } from '../../types';

interface CartSidebarProps {
    isOpen: boolean;
    onClose: () => void;
    cartItems: CartItems[];
    onUpdateQuantity: (productId: number, quantity: number) => void;
    onRemoveItem: (productId: number) => void;
    totalPrice: number;
}

const CartSidebar: React.FC<CartSidebarProps> = () => {
    return (
        <div>

        </div>
    )
}

export default CartSidebar
