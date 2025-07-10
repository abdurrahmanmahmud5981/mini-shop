import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { products } from '../data/products';
import { ArrowLeft, Heart, ShoppingCart, Star } from 'lucide-react';
import { useCartContext } from '../context/useCartContext';

const ProductDetails: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>();
    const { addToCart } = useCartContext();

    const { cartItems } = useCartContext()


    const product = products.find(p => p.id === Number(id));

    const exists = cartItems.some(item => item.product.id === product?.id);


    if (!product) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="text-center flex flex-col justify-center items-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Product Not Found</h1>
                    <button
                        onClick={() => navigate('/')}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 cursor-pointer flex items-center justify-center gap-2"
                    >
                        <ArrowLeft size={16} />
                        Back to Home
                    </button>
                </div>
            </div>
        );
    }

    const handleAddToCart = async () => {
        setIsLoading(true)


        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsLoading(false)
        addToCart(product);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <button
                onClick={() => navigate(-1)}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors duration-200 cursor-pointer"
            >
                <ArrowLeft size={20} />
                <span>Back</span>
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-4">
                    <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="space-y-6">
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-emerald-600 font-semibold uppercase tracking-wide">
                                {product.category}
                            </span>
                            <button className="p-2 text-gray-400 hover:text-red-500 transition-colors duration-200">
                                <Heart size={24} />
                            </button>
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">
                            {product.name}
                        </h1>
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="flex items-center space-x-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-5 h-5 ${i < Math.floor(product.rating)
                                            ? 'fill-yellow-400 text-yellow-400'
                                            : 'text-gray-300'
                                            }`}
                                    />
                                ))}
                            </div>
                            <span className="text-lg font-medium text-gray-900">
                                {product.rating}
                            </span>
                            <span className="text-gray-500">
                                ({product.reviews} reviews)
                            </span>
                        </div>
                    </div>

                    <div className="border-t border-b border-gray-200 py-6">
                        <p className="text-gray-700 text-lg leading-relaxed">
                            {product.description}
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-gray-900">
                                ${product.price.toFixed(2)}
                            </span>
                            <span className="text-green-600 font-medium">In Stock</span>
                        </div>

                        <div className="flex space-x-4">
                            <button
                                disabled={exists}
                                onClick={handleAddToCart}
                                className={`flex-1 px-8 py-4 rounded-xl flex items-center justify-center space-x-3 font-semibold text-lg transition-colors duration-200 ${exists
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
                                        <ShoppingCart size={24} />
                                        <span>{exists ? 'Already in Cart' : 'Add to Cart'}</span>
                                    </>
                                )}

                            </button>

                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-6">
                            <div className="text-center p-4 bg-gray-50 rounded-lg">
                                <div className="text-2xl font-bold text-gray-900">Free</div>
                                <div className="text-sm text-gray-600">Shipping</div>
                            </div>
                            <div className="text-center p-4 bg-gray-50 rounded-lg">
                                <div className="text-2xl font-bold text-gray-900">30</div>
                                <div className="text-sm text-gray-600">Day Returns</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
