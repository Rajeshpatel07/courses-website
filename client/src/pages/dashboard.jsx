import { Sidebar } from "../components";
import { Link } from "react-router-dom";

export default function Dashboard() {

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <div className="flex items-center justify-end gap-5 px-10">
          <Link to="/blog/new"
            className="px-4 py-2 rounded bg-blue-500 text-white"
          >Add Blog</Link>
          <Link to="/course/new"
            className="px-4 py-2 rounded bg-blue-500 text-white"
          >Add Course</Link>
        </div>
        <div>
          {/* WARN: add the course here*/}
        </div>
      </div>
    </div>
  )
}
