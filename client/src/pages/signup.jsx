import axios from "axios"
import config from "../config/config"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Signup() {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password } = formData;
    if (username.length > 0 && email.length > 0 && password.length > 0) {
      try {
        const response = await axios.post(`${config.api}/api/v1/login`, formData)
        if (response.status === 201) {
          console.log(response)
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
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Create your account</h3>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <label className="font-medium">
              Username
            </label>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>

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

          {error.length > 0 && <p className="text-red-500">{error}</p>}

          <button
            className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
          >
            Sign up
          </button>
        </form>
        <p className="text-center">Already have an account?
          <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500"> Login</Link>
        </p>
      </div>
    </main>)
}
