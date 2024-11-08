
export default function Footer() {

  const footerNavs = [
    {
      name: 'Courses'
    },
    {
      name: 'Blogs'
    },
  ]

  return (
    <footer className="text-gray-500 bg-white px-4 py-16 max-w-screen-xl mx-auto md:px-8">
      <div className="max-w-lg sm:mx-auto sm:text-center">
        <p className="leading-relaxed mt-2 text-[15px]">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>
      <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
        {
          footerNavs.map((item, idx) => (
            <li className=" hover:text-gray-800" key={idx}>
              <a key={idx} href="#">
                {item.name}
              </a>
            </li>
          ))
        }
      </ul>
    </footer>
  )
}
