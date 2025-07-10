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

export interface CheckoutForm {
  name: string;
  email: string;
  address: string;
}