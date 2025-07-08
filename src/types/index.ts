export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    rating: number;
    reviews: number;
}

export interface CartItems {
    product: Product;
    quantity: number;
}