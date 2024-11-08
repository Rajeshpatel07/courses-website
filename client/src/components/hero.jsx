import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className=" py-16 lg:py-36">
      <div className="max-w-screen-2xl mx-auto w-full text-gray-600 items-center justify-between overflow-hidden lg:flex md:px-8">
        <div className="flex-none space-y-6 px-6 md:px-0 lg:max-w-xl">
          <h1 className="text-6xl text-gray-800 font-extrabold md:text-6xl lg:text-7xl">
            Learn any skill to advance your
            <span className="text-blue-600"> career path </span>
          </h1>
          <p className="text-lg lg:text-xl">
            Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          </p>
          <div className="items-center gap-x-4 space-y-4 sm:flex sm:space-y-0">
            <Link to="/signup" className="block py-3 px-6 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none text-lg lg:text-xl">
              Get started
            </Link>
            <Link to="/login" className="flex items-center justify-center gap-x-2 py-3 px-6 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex text-lg lg:text-xl">
              Get access
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="flex-none mt-14 h-full w-full md:max-w-xl lg:max-w-[600px]">
          <img
            src="https://images.unsplash.com/photo-1573164713619-24c711fe7878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
            className="w-full h-auto lg:rounded-tl-[108px]"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
