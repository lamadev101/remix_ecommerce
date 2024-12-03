import { type MetaFunction } from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";
import ProductList from "~/components/ProductList";
import { fetchData } from "~/utils/helpers/fetchData";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export default function Index() {
  const products: Product[] = useLoaderData();
  return (
    <ProductList products={products} />
  );
}


export const loader = async () => {
  const products: Product[] = await fetchData("/products");
  return json(products, { status: 200 });
};