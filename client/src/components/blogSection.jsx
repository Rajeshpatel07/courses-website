import { useState, useEffect } from "react";
import axios from "axios";
import config from "../config/config";
import { BlogCard } from "./ui/card"

export default function BlogSection() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const response = await axios.get(`${config.api}/api/v1/blogs`);
        console.log(response.data)
        if (response.status === 200) {
          setBlogs(response.data);
        }
      } catch (err) {
        console.log(err)
      }
    }
    getBlogs()
  }, [])

  return (
    <div>
      <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
        <div className="text-center">
          <h1 className="text-3xl text-gray-800 font-semibold">
            Blog
          </h1>
          <p className="mt-3 text-gray-500">
            Blogs that are loved by the community. Updated every hour.
          </p>
        </div>
        <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.length > 0 &&
            <>
              {
                blogs.slice(0, 3).map((items, key) => (
                  <BlogCard item={items} key={key} />
                ))
              }
            </>
          }
        </div>
      </section>
    </div>
  )
}

