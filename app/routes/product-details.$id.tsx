import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/server-runtime";
import Productcard from "~/components/Productcard";
import { fetchData } from "~/utils/helpers/fetchData";

type LoaderData = {
  product: Product;
  relatedProducts: Product[];
};

export default function ProductDetails() {

  const { product, relatedProducts } = useLoaderData<LoaderData>()

  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <img
            src={product.image}
            alt={product.title}
            className=" object-contain w-full h-80"
          />
        </div>
        <div className="col-span-1">
          <div className="bg-orange-300 text-white">{product.category}</div>
          <h1 className="text-2xl my-8">{product.title}</h1>
          <div>
            <div>$ {product.price}</div>
          </div>
          <p className="text-gray-600">{product.description}</p>
          <div className="mt-4 space-x-2">
            <button className="bg-orange-500 px-4 py-3 text-white rounded">Add to Cart</button>
            <button className="bg-red-500 px-4 py-3 text-white rounded">Buy Now</button>
          </div>
        </div>
      </div>

      <div>
        <h2>Related Products</h2>
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