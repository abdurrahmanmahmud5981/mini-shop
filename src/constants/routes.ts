export const ROUTES = {
  HOME: '/',
  PRODUCT: '/product/:id',
  CART: '/cart',
  CHECKOUT: '/checkout'
} as const;

export const createProductRoute = (id: number) => `/product/${id}`;