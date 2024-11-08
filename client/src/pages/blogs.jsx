import { useEffect, useState } from "react";
import { BlogCard } from "../components/ui/card";
import axios from "axios";
import config from "../config/config";

export default function Blogs() {
  const [Blogs, setBlogs] = useState([]);

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
      <section className="py-10">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <ul className="grid gap-x-8 gap-y-10  sm:grid-cols-2 lg:grid-cols-3">
            {Blogs.length > 0 ?
              <>
                {
                  Blogs.map((items, key) => (
                    <BlogCard item={items} key={key} />
                  ))
                }
              </> :
              <p>No Blogs Found</p>
            }
          </ul>
        </div>
      </section>
    </div>
  )
}
