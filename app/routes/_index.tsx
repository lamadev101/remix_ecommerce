import { type MetaFunction } from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";
import OfferProducts from "~/components/OfferProducts";
import ProductList from "~/components/ProductList";
import { fetchData } from "~/utils/helpers/fetchData";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


type LoaderData = {
  products: Products;
  categoryProducts: Products;
}


export default function Index() {
  const { products, categoryProducts } = useLoaderData<LoaderData>();
  return (
    <main>
      <OfferProducts products={categoryProducts} />
      <div></div>
      <ProductList products={products} />
    </main>
  );
}


export const loader = async () => {
  const products: Products = await fetchData("/products");
  const categoryProducts: Products = await fetchData(`/products/category/jewelery`)

  return json({ products, categoryProducts });
};