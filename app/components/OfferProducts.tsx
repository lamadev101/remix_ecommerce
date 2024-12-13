import { Link } from "@remix-run/react"
import { Button, Carousel } from "antd"
// import { Carousel } from "react-responsive-carousel"

const OfferProducts = ({ products }: { products: Products }) => {
  if (!products) {
    return null
  }

  return (
    <div className="mb-8 shadow-sm rounded-md">
      <Carousel autoplay>
        {products?.map((product) => (
          <div key={product?.id} className="w-full">
            <div className="grid grid-cols-12 items-center justify-between col-span-12 px-8 py-12">
              <div className="col-span-6">
                <div>Special Offer !!</div>
                <h1 className="text-[3rem] font-bold text-gray-800">{product?.title || "No Title"}</h1>
                <p className="text-lg pt-4 pb-8 text-gray-600">{product?.description || "No Description"}</p>
                <Link
                  to={`/product-details/${product.id}`}
                  className="bg-red-400 px-6 py-4 text-white"
                >
                  Shop Now
                </Link>
              </div>
              <div className="col-span-6 flex items-center justify-center">
                <img
                  src={product?.image || ""}
                  alt={product?.title || "Product Image"}
                  className="w-80 h-80 object-contain rounded-md"
                />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default OfferProducts