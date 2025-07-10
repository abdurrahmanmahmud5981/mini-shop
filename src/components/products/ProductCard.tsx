import React, { useState } from 'react'
import type { Product } from '../../types';
import { ShoppingCart, Star } from 'lucide-react';
import { Link } from 'react-router';
import { createProductRoute } from '../../constants/routes';
import { useCartContext } from '../../context/useCartContext';


interface ProductCardProps {
    product: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const [isLoading, setIsLoading] = useState(false)
    const { addToCart, cartItems } = useCartContext();

    const isExist = cartItems.some(item => item.product.id === product?.id)



    const handleAddToCart = async () => {
        setIsLoading(true)
        

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsLoading(false)
        addToCart(product);
    };

    return (
        <>
            <Link
                to={createProductRoute(product.id)}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group block"
            >
                <div className="relative overflow-hidden">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute  inset-0 bg-black/5 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
                </div>

                <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-500 font-medium">{product.category}</span>
                        <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm text-gray-600">{product.rating}</span>
                            <span className="text-sm text-gray-400">({product.reviews})</span>
                        </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-emerald-600 transition-colors duration-200">
                        {product.name}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {product.description}
                    </p>

                    <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-gray-900">
                            ${product.price.toFixed(2)}
                        </span>
                        <button
                            onClick={handleAddToCart}
                            disabled={isExist} // <-- also disable the button
                            className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200 font-medium ${isExist
                                ? 'bg-gray-400 text-white cursor-not-allowed'
                                : 'bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer'
                                }`}
                        >
                            {isLoading ? (
                                <>
                                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                                    <span>Adding...</span>
                                </>
                            ) : (
                                <>
                                    <ShoppingCart size={16} />
                                    <span>{isExist ? 'Added' : 'Add to Cart'}</span>
                                </>
                            )}

                        </button>

                    </div>
                </div>
            </Link>
        </>
    )
}

export default ProductCard
