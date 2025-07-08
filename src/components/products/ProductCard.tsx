import React from 'react'
import type { Product } from '../../types';


interface ProductCardProps {
  product: Product;
}
const ProductCard:React.FC<ProductCardProps> = ({product}) => {
  return (
    <div>
      {product.name}
    </div>
  )
}

export default ProductCard
