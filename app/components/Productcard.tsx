import { Link } from "@remix-run/react"
import { BsCart, BsHeart } from "react-icons/bs"

const Productcard = ({ id, title, description, category, rating, price, image }: Product) => {
  return (
    <div className="col-span-1 bg-white hover:shadow-md rounded-md overflow-hidden relative">
      <img
        src={image}
        alt={title}
        className="h-80 w-full object-contain"
      />
      <span className="absolute top-0 right-0 bg-slate-600 text-white px-4 shadow-md ">{category}</span>

      <div className="text-black px-2 py-3">
        <Link to={`/product-details/${id}`}>
          <h3 className="text-2xl font-semibold line-clamp-1">{title}</h3>
        </Link>
        <p className="line-clamp-2 text-gray-400 my-2">{description}</p>
        <div>
          <span>$ {price}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="bg-white shadow-md rounded-full p-1 cursor-pointer text-orange-500">
            <BsHeart size={24} />
          </div>
          <div className="bg-white shadow-md rounded-full p-1 cursor-pointer text-pink-500">
            <BsCart size={24} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Productcard