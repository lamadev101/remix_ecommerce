import { Link, NavLink } from "@remix-run/react"

const CategoryList = ({ categories }: { categories: Categories }) => {
  return (
    <div className="bg-slate-200 col-span-2 px-2 py-3 h-[max-content]">
      <div className="flex flex-col gap-4">
        <NavLink to="?category=all">All</NavLink>
        {categories?.map((category: string, index: number) => (
          <NavLink
            key={index}
            to={`?category=${category}`}
            className=" capitalize"
          >
            {category}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default CategoryList