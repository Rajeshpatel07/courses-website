import { useState, useEffect } from "react";
import config from "../config/config";
import axios from "axios";
import { CourseCard } from "../components/ui/card"

export default function Courses() {
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
      <section className="py-10">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <ul className="grid gap-x-8 gap-y-10  sm:grid-cols-2 lg:grid-cols-3">
            {courses.length > 0 ?
              <>
                {
                  courses.map((items, key) => (
                    <CourseCard items={items} key={key} />
                  ))
                }
              </> :
              <p>courses not found</p>
            }
          </ul>
        </div>
      </section>
    </div>
  )
}
