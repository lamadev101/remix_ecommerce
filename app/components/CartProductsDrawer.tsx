import { Drawer } from 'antd';
import { useState, useEffect } from 'react';
import { BsTrash } from 'react-icons/bs';
import useStore from '~/utils/store';

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const CartProductsDrawer = ({ isOpen, setIsOpen }: Props) => {
  const { cart, removeCartProduct } = useStore();

  // Initialize qty state for each cart item
  const [quantities, setQuantities] = useState<Record<number, number>>({});

  useEffect(() => {
    if (cart) {
      // Initialize quantities from cart items
      const initialQuantities = cart.reduce(
        (acc, item) => ({ ...acc, [item.id]: item.qty }),
        {}
      );
      setQuantities(initialQuantities);
    }
  }, [cart]);

  // Update quantity for a specific item
  const qtyHandler = (id: number, sign: string) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: sign === "plus"
        ? prev[id] + 1
        : prev[id] > 1
          ? prev[id] - 1
          : prev[id],
    }));
  };

  return (
    <Drawer
      title="Cart Products"
      onClose={() => setIsOpen(false)}
      open={isOpen}
      size='large'
    >
      <div>
        <div className="space-y-2">
          {cart?.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border border-slate-100 hover:shadow px-2 py-1 rounded-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 rounded-md object-contain"
              />
              <div className="w-60">
                <h2 className="font-bold">{item.title}</h2>
                <span className=" capitalize">{item.category}</span>

              </div>
              <div className="font-bold">$ {item.price}</div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => qtyHandler(item.id, "minus")}
                  className="hover:shadow-md px-3 py-1 bg-slate-300 rounded-md"
                >
                  -
                </button>
                <span className="px-3 py-1 rounded-md border border-slate-200">
                  {quantities[item.id] || 1}
                </span>
                <button
                  onClick={() => qtyHandler(item.id, "plus")}
                  className="hover:shadow-md px-3 py-1 bg-slate-300 rounded-md"
                >
                  +
                </button>
              </div>
              <div className="font-bold">$ {item.price * quantities[item.id]}</div>
              <div
                className="bg-red-200 rounded-full p-2 cursor-pointer"
                onClick={() => removeCartProduct(item.id)}
              >
                <BsTrash size={14} className="text-red-400 hover:text-red-500" />
              </div>

            </div>
          ))}
        </div>
      </div>
    </Drawer>
  );
};

export default CartProductsDrawer;
