import { useState, useEffect } from "react";
import axios from "axios";
import config from "../config/config";
import { Link } from "react-router-dom"
import { CourseCard } from "./ui/card"

export default function CourseSection() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await axios.get(`${config.api}/api/v1/courses`);
        console.log(response.data)
        if (response.status === 200) {
          setCourses(response.data);
        }
      } catch (err) {
        console.log(err)
      }
    }
    getCourses()
  }, [])




  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
            <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">Latest Courses</h1>
            <p className="text-gray-600">Courses that are loved by the People. Updated every hour.</p>
          </div>
          <ul className="grid gap-x-8 gap-y-10  sm:grid-cols-2 lg:grid-cols-3">
            {
              courses.slice(0, 3).map((items, key) => (
                <CourseCard items={items} key={key} />
              ))
            }
          </ul>
          <div className="w-full py-10 flex items-center justify-center">
            <Link to="/courses"
              className="px-10 py-3 text-white font-medium rounded-3xl bg-blue-500">
              More ..
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
