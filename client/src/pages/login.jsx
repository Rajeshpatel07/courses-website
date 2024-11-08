import axios from "axios";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import config from "../config/config";

axios.defaults.withCredentials = true; // Enable credentials for all axios requests
axios.defaults.baseURL = "http://localhost:5000"; // replace with your backend URL

export default function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.email.length > 0 && formData.password.length > 0) {
      try {
        const response = await axios.post(`${config.api}/api/v1/login`, formData,)
        if (response.status === 200) {
          console.log(response)
          localStorage.setItem("userId", response.data.userId);
          if (response.data.role == 'admin') {
            navigate("/dashboard")
          } else {
            navigate("/courses")
          }
        }
      } catch (err) {
        console.log(err)
        setError("something went wrong? Please check your credentials");
      }
    }
  }

  return (
    <main className="w-full h-[90vh] flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600 space-y-5">
        <div className="text-center pb-8">
          <div className="mt-5">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Log in to your account</h3>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <label className="font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-x-3">
              <input type="checkbox" id="remember-me-checkbox" className="checkbox-item peer hidden" />
              <label
                htmlFor="remember-me-checkbox"
                className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
              >
              </label>
              <span>Remember me</span>
            </div>
            <a href="javascript:void(0)" className="text-center text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>

          {error.length > 0 && <p className="text-red-500">{error}</p>}

          <button
            className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
          >
            Sign in
          </button>
        </form>
        <p className="text-center">Don't have an account?
          <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">Sign up</Link>
        </p>
      </div>
    </main>
  )
}
