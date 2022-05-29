import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../images/logo.png"

export const Navbar: FC = () => {
  return (
    <nav className="md:px-24 py-5 flex items-center justify-between">
      <div className="flex items-center justify-center gap-2">
        <img src={Logo} alt="Married Logo" className="h-6 sm:h-12" />
      </div>

      <ul className="flex items-center gap-10">
        <li>
          <NavLink 
            to="/design"
            className={({isActive}) => (
              isActive ? "text-amber-700" : "text-gray-900 dark:text-gray-100 hover:text-amber-700"
            ) + " transition-all duration-300 ease-in-out"}
          >
            Desain
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/feature"
            className={({isActive}) => (
              isActive ? "text-amber-700" : "text-gray-900 dark:text-gray-100 hover:text-amber-700"
            ) + " transition-all duration-300 ease-in-out"}
          >
            Fitur
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/price"
            className={({isActive}) => (
              isActive ? "text-amber-700" : "text-gray-900 dark:text-gray-100 hover:text-amber-700"
            ) + " transition-all duration-300 ease-in-out"}
          >
            Harga
          </NavLink>
        </li>
        <li>
          <Link to="/login" className="text-white bg-yellow-900 hover:bg-amber-800 focus:ring-4 focus:ring-amber-600 font-medium rounded-lg text-sm px-7 py-2.5 mr-2 mb-2 dark:bg-amber-600 dark:hover:bg-amber-700 focus:outline-none dark:focus:ring-amber-800">
            Masuk
          </Link>
        </li>
      </ul>
    </nav>
  )
}