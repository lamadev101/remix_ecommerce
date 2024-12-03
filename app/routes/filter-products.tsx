import { useLoaderData } from '@remix-run/react'
import Banner from '~/components/Banner';
import CategoryList from '~/components/CategoryList'
import ProductList from '~/components/ProductList';
import { fetchData } from '~/utils/helpers/fetchData'

type LoaderData = {
  categories: Categories;
  categoryProducts: Product[];
}
export default function FilterProducts() {
  const { categories, categoryProducts } = useLoaderData<LoaderData>()

  return (
    <div>
      <Banner imgUrl='https://images.unsplash.com/photo-1488998427799-e3362cec87c3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <div className="grid grid-cols-12 gap-4">
        <CategoryList categories={categories} />
        <div className="col-span-10">
          <ProductList products={categoryProducts} />
        </div>
      </div>
    </div>
  )
}


export const loader = async ({ request }: { request: any }) => {
  const url = new URL(request.url);
  const category = url.searchParams.get("category");

  const categories: Categories = await fetchData("/products/categories")
  const categoryProducts: Product[] = category === "all" ? await fetchData(`/products`) : await fetchData(`/products/category/${category}`)

  return { categories, categoryProducts }
}
