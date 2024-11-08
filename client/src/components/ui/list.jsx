import { Link } from "react-router-dom"
import { links } from "../../data/links"

export function List({ style }) {
  return (
    <>
      {links.map((link, idx) => (
        <Link to={`/${link.name}`} key={idx}
          className={`${style} ? ${style}: "text-sm/6 font-semibold text-gray-900 hover:text-blue-500 hover:underline"`
          }
        >{link.name}</Link>
      ))
      }
    </>
  )
}
