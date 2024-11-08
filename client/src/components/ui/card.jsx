import { Link } from "react-router-dom"



export function BlogCard({ item }) {

  return (
    <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm">
      <Link to={`/blog/${item.id}`}>
        <img src={item.image} loading="lazy" alt={item.title} className="w-full h-48 rounded-t-md" />
        <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
          <div className="flex-none w-10 h-10 rounded-full">
            <img src={item.Author.image} className="w-full h-full rounded-full" alt={item.Author.username} />
          </div>
          <div className="ml-3">
            <span className="block text-gray-900">{item.Author.username}</span>
            <span className="block text-gray-400 text-sm">{new Date(item.Author.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
        <div className="pt-3 ml-4 mr-2 mb-3">
          <h3 className="text-xl text-gray-900">
            {item.title}
          </h3>
          <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
        </div>
      </Link>
    </article >)
}


export function CourseCard({ items }) {
  return (
    <li className="w-full mx-auto group sm:max-w-sm list-none hover:scale-105 transition" >
      <div className="border p-5 rounded-lg">
        <Link to={`/course/${items.id}`}>
          <img src={items.image ?? "fjwo"} loading="lazy" alt={items.title} className="w-full rounded-md" />
          <div className="mt-3 space-y-2">
            <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
              {items.title}
            </h3>
            <div className="flex items-center justify-between ">
              <h1 className="text-xl font-bold">$ {items.discountedPrice}</h1>
              <button className="py-2 px-4 rounded-lg text-lg font-medium text-white bg-blue-500
                ">Buy now</button>
            </div>
          </div>
        </Link>
      </div>
    </li>

  )
}
