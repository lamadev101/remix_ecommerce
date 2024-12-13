import { Button, Carousel } from "antd"
// import { Carousel } from "react-responsive-carousel"

const OfferProducts = ({ products }: { products: Products }) => {
  if (!products) {
    return null
  }

  return (
    <div>
      {/* <Carousel autoplay> */}
        {products?.map((product) => (
          <div key={product?.id} className="flex items-center justify-between col-span-12">
            <div className="col-span-8">
              <h1>{product?.title || "No Title"}</h1>
              <p>{product?.description || "No Description"}</p>

              <Button>Shop Now</Button>
            </div>
            <div className="col-span-4">
              <img
                src={product?.image || ""}
                alt={product?.title || "Product Image"}
                className="w-80 h-full rounded-md"
              />
            </div>
          </div>
        ))}
      {/* </Carousel> */}
    </div>
  )
}

export default OfferProducts