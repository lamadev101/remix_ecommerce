import useStore from "~/utils/store";

export default function useCarts() {
  const { cart, addToCart } = useStore();

  const addToCartHandler = (product: Product, qty: number) => {
    const cartItem: CartProduct = {
      id: product.id,
      title: product.title,
      price: product.price,
      qty: qty,
      category: product.category,
      image: product.image,
    };
    addToCart(cartItem);
  };

  return { cart, addToCartHandler };
}