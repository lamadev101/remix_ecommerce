import { Link } from "@remix-run/react"
import { BsCart, BsHeart } from "react-icons/bs"
import useCarts from "~/hooks/useCarts"

const Productcard = (product: Product) => {
  const { addToCartHandler } = useCarts()

  return (
    <div className="col-span-1 bg-white hover:shadow-md rounded-md overflow-hidden relative">
      <img
        src={product.image}
        alt={product.title}
        className="h-80 w-full object-contain"
      />
      <span className="absolute top-0 right-0 bg-slate-600 text-white px-4 shadow-md ">{product.category}</span>

      <div className="text-black px-2 py-3">
        <Link to={`/product-details/${product.id}`}>
          <h3 className="text-2xl font-semibold line-clamp-1">{product.title}</h3>
        </Link>
        <p className="line-clamp-2 text-gray-400 my-2">{product.description}</p>
        <div>
          <span>$ {product.price}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="bg-white shadow-md rounded-full p-1 cursor-pointer text-orange-500">
            <BsHeart size={24} />
          </div>
          <div
            onClick={() => addToCartHandler(product, 1)}
            className="bg-white shadow-md rounded-full p-1 cursor-pointer text-pink-500"
          >
            <BsCart size={24} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Productcard