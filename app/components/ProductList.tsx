import Productcard from "./Productcard";

type ProductListType = {
  products: Product[];
}
const ProductList = ({ products }: ProductListType) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {products && products?.map(product => (
        <Productcard key={product.id} {...product} />
      ))}
    </div>
  )
}

export default ProductList