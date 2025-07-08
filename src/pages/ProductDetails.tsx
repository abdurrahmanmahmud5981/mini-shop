import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { products } from '../data/products';
import { ArrowLeft } from 'lucide-react';

const ProductDetails: React.FC = () => {
    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>();
    const product = products.find(p => p.id === Number(id));

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

    
    return (
        <div>
            Details
        </div>
    )
}

export default ProductDetails
