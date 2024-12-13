import { Button } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselBanner = ({ products }: { products: Products }) => {
  console.log("🚀 ~ CarouselBanner ~ products:", products)

  if (products?.length < 0) {
    return null
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
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
      </Slider>
    </div>
  );
};

export default CarouselBanner;
