import { create } from "zustand"
import { getLocalStorage, setLocalStorage } from "./helper";

const useStore = create<StoreState>((set, get) => ({
  cart: getLocalStorage("cart_products") || [],
  addToCart: (product: CartProduct) => {
    const { cart } = get();
    const existingItem = cart.find(item => item.id === product.id)

    const updatedCart = existingItem ? cart.map(item =>
      item.id === product.id ? { ...item, qty: item.qty + product.qty } : item
    )
      : [...cart, product]
    set({ cart: updatedCart });
    setLocalStorage("cart_products", updatedCart)
  },

  incQty: (productId: number) => {
    const { cart } = get()
    const updatedCart = cart.map(item =>
      item.id === productId ? { ...item, qty: item.qty + 1 } : item
    )
    set({ cart: updatedCart })
    setLocalStorage("cart_products", updatedCart)
  },

  decQty: (productId: number) => {
    const { cart } = get()
    const updatedCart = cart.map(item =>
      item.id === productId && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
    )
    set({ cart: updatedCart })
    setLocalStorage("cart_products", updatedCart)
  },

  removeCartProduct: (productId: number) => {
    const { cart } = get()
    const updatedCart = cart.filter(item => !(item.id === productId))
    set({ cart: updatedCart })
    setLocalStorage("cart_products", updatedCart)
  }
















}))

export default useStore;