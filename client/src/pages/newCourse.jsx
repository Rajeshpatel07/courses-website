
import { useState } from "react";
import config from "../config/config";
import axios from "axios";

export default function NewCourse() {
  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    price: "",
    discountPrice: "",
    imageUrl: "",
    userId: localStorage.getItem('userId')
  });
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.api}/api/v1/courses/new`, courseData)
      console.log(response)
      if (response.status === 201) {
        setStatus("Course added Successfull");
      }
    } catch (err) {
      console.log(err);
      setError("Error while createing new course please try again");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Add New Course
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Course Title
            </label>
            <input
              type="text"
              name="title"
              value={courseData.title}
              onChange={handleChange}
              placeholder="Enter course title"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={courseData.description}
              onChange={handleChange}
              placeholder="Enter course description"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              rows="4"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="text"
              name="imageUrl"
              value={courseData.imageUrl}
              onChange={handleChange}
              placeholder="Enter image URL"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                type="number"
                name="price"
                value={courseData.price}
                onChange={handleChange}
                placeholder="Enter price"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Discount Price
              </label>
              <input
                type="number"
                name="discountPrice"
                value={courseData.discountPrice}
                onChange={handleChange}
                placeholder="Enter discount price"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          {status.length > 0 && <p className="text-green-500">{status}</p>}

          {error.length > 0 && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition-colors"
          >
            Add Course
          </button>
        </form>
      </div>
    </div>
  );
}

