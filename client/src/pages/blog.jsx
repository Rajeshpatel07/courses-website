import axios from "axios";
import { useEffect, useState } from "react"
import config from "../config/config";
import { useParams } from "react-router-dom";

export default function Blog() {
  const [data, setData] = useState(null);
  const params = useParams();

  useEffect(() => {
    const request = async () => {
      try {
        const response = await axios.get(`${config.api}/api/v1/blogs/${params.blogId}`)
        if (response.status === 200) {
          console.log(response)
          setData(response.data);
        }
      } catch (err) {
        console.log(err)
      }
    }

    request()
  }, [params.blogId])


  return (
    <div className="max-w-screen-2xl mx-auto bg-gray-100 flex justify-center py-10 px-4">
      <div className=" w-full bg-white rounded-lg shadow-md p-8">
        {data &&
          <>
            <h1 className="text-3xl font-bold text-gray-800">{data.title}</h1>

            <div className="mt-4 flex items-center space-x-2 text-gray-500 text-sm">
              <span>{data.Author.username}</span>
              <span>&bull;</span>
              <span>{data.createdAt}</span>
            </div>

            <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
          </>
        }

      </div>
    </div>
  );
}
