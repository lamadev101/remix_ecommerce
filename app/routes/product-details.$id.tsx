import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/server-runtime";
import { useState } from "react";
import { BsStar } from "react-icons/bs";
import Productcard from "~/components/Productcard";
import QtyBtns from "~/components/shared/QtyBtns";
import useCarts from "~/hooks/useCarts";
import { fetchData } from "~/utils/helpers/fetchData";
import useStore from "~/utils/store";

type LoaderData = {
  product: Product;
  relatedProducts: Product[];
};

export default function ProductDetails() {
  const { product, relatedProducts } = useLoaderData<LoaderData>()

  const [qty, setQty] = useState(1)

  const { addToCartHandler } = useCarts()

  return (
    <div>
      <div className="grid grid-cols-2 py-12">
        <div className="col-span-1">
          <img
            src={product.image}
            alt={product.title}
            className=" object-contain w-full h-80"
          />
        </div>
        <div className="col-span-1 space-y-4">
          <span className="bg-orange-300 text-white px-4 py-1 rounded-md">{product.category}</span>
          <h1 className="text-2x">{product.title}</h1>

          <div className="flex items-center gap-2">
            <span className="text-slate-300">Rating: </span>
            <BsStar className="text-orange-500" />
            <span>{product.rating.rate} ({product.rating.count})</span>
          </div>
          <div className=" space-x-4 font-bold">
            <span className="text-2xl ">$ {product.price}</span>
            <span className="text-2xl text-red-500 line-through ">$ {product.price + 5}</span>
          </div>
          <p className="text-gray-600">{product.description}</p>
          <QtyBtns qty={qty} setQty={setQty} />
          <div className="space-x-2">
            <button
              className="bg-orange-400 hover:bg-orange-500 px-10 py-3 text-white rounded"
              onClick={() => addToCartHandler(product, qty)}
            >
              Add to Cart
            </button>
            <button className="bg-red-500 px-10 py-3 text-white rounded">Buy Now</button>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl text-orange-400 mb-4 font-bold">Related Products</h2>
        <div className="grid grid-cols-5 gap-4">
          {relatedProducts?.map(product => (
            <Productcard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export const loader = async ({ params }: { params: { id: number } }) => {
  const { id } = params
  const product: Product = await fetchData(`/products/${id}`)
  const relatedProducts: Product[] = await fetchData(`/products/category/${product.category}`)

  return json({ product, relatedProducts }, { status: 200 });
};