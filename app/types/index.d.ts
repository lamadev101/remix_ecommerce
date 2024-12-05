declare interface Product {
  id: number,
  category: string,
  price: number,
  title: string,
  description: string,
  image: string,
  rating: {
    count: number,
    rate: number,
  }
}
declare type Categories = string[]

declare interface CartProduct {
  id: number,
  category: string,
  price: number,
  title: string,
  image: string,
  qty: number,
}

declare interface StoreState {
  cart: CartProduct[];
  addToCart: (product: CartProduct) => void;
  incQty: (productId: number) => void;
  decQty: (productId: number) => void;
  removeCartProduct: (productId: number) => void;
}