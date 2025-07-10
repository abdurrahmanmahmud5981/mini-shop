import React from 'react'
import type { CartItems } from '../../types';
import { useNavigate } from 'react-router';
import { ROUTES } from '../../constants/routes';
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react';

interface CartSidebarProps {
    isOpen: boolean;
    onClose: () => void;
    cartItems: CartItems[];
    onUpdateQuantity: (productId: number, quantity: number) => void;
    onRemoveItem: (productId: number) => void;
    totalPrice: number;
}

const CartSidebar: React.FC<CartSidebarProps> = ({
    isOpen,
    onClose,
    cartItems,
    onUpdateQuantity,
    onRemoveItem,
    totalPrice

}) => {
    const navigate = useNavigate();

    const handleCheckout = () => {
        onClose();
        navigate(ROUTES.CHECKOUT);
    };

    return (
        <>
            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <div
                className={`fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b">
                        <h2 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
                            <ShoppingBag size={24} />
                            <span>Shopping Cart</span>
                        </h2>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Cart Items */}
                    <div className="flex-1 overflow-y-auto p-6">
                        {cartItems.length === 0 ? (
                            <div className="text-center py-12">
                                <ShoppingBag size={48} className="mx-auto text-gray-300 mb-4" />
                                <p className="text-gray-500 text-lg">Your cart is empty</p>
                                <p className="text-gray-400 text-sm mt-2">Add some products to get started</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {cartItems.map((item) => (
                                    <div key={item.product.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                                        <img
                                            src={item.product.image}
                                            alt={item.product.name}
                                            className="w-16 h-16 object-cover rounded-lg"
                                        />
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-sm font-medium text-gray-900 truncate">
                                                {item.product.name}
                                            </h3>
                                            <p className="text-sm text-gray-500">${item.product.price.toFixed(2)}</p>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <button
                                                disabled={item.quantity <= 1}
                                                onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                                                className={`p-1 hover:bg-gray-200 rounded-full transition-colors duration-200 ${item.quantity <= 1 ? "cursor-not-allowed" : " cursor-pointer"
                                                    }`}
                                            >
                                                <Minus size={16} />
                                            </button>
                                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                                            <button
                                                onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                                                className="p-1 hover:bg-gray-200 rounded-full transition-colors duration-200"
                                            >
                                                <Plus size={16} />
                                            </button>
                                            <button
                                                onClick={() => onRemoveItem(item.product.id)}
                                                className="p-1 hover:bg-red-100 text-red-600 rounded-full transition-colors duration-200 ml-2"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    {cartItems.length > 0 && (
                        <div className="border-t p-6 space-y-4">
                            <div className="flex justify-between items-center text-lg font-semibold">
                                <span>Total:</span>
                                <span>${totalPrice.toFixed(2)}</span>
                            </div>
                            <button
                                onClick={handleCheckout}
                                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
                            >
                                Checkout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>

    )
}

export default CartSidebar
