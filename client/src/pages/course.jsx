import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import config from "../config/config";

export default function Course() {
  const [course, setCourse] = useState(null);

  const params = useParams()
  useEffect(() => {
    const getCourse = async () => {
      try {
        const response = await axios.get(`${config.api}/api/v1/courses/${params.courseId}`);
        console.log(response.data.price)
        if (response.status === 200) {
          setCourse(response.data)
        }
      } catch (err) {
        console.log(err)
      }
    }

    getCourse()

  }, [params])

  return (

    <div className="min-h-screen bg-gray-100">
      {course &&
        <div className="container mx-auto px-6 py-12 lg:px-12">
          {/* Main Content */}
          <div className="lg:flex lg:space-x-10">
            {/* Course Info */}
            <div className="lg:w-3/4">
              {/* Course Image */}
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-[30vh] lg:h-[60vh] object-cover rounded-lg"
              />

              {/* Course Title */}
              <h1 className="text-3xl font-bold text-gray-900 mt-8">{course.title}</h1>

              {/* Author Info */}
              <div className="flex items-center mt-4">
                <img
                  src={course.creator.image}
                  alt={course.creator.username}
                  className="w-12 h-12 rounded-full border-2 border-gray-300"
                />
                <div className="ml-4">
                  <p className="text-lg font-semibold text-gray-800">{course.creator.username}</p>
                  <p className="text-gray-500 text-sm">Course Creator</p>
                </div>
              </div>

              {/* Course Description */}
              <div className="mt-8 text-gray-700 leading-relaxed">
                <p>{course.description}</p>
              </div>
            </div>

            {/* Buy Now Section */}
            <div className="lg:w-1/4 mt-8 lg:mt-0">
              <div className="sticky top-20 bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-800">${course.discountedPrice}</span>
                  <span className="line-through text-gray-400">${course.price}</span>
                </div>
                <button className="w-full mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
                  Buy Now
                </button>
                <p className="mt-4 text-gray-500 text-sm">30-Day Money-Back Guarantee</p>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
