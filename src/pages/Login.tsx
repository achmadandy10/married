import { FaGoogle, FaLock, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"
import Logo from "../images/logo.png"

export const Login = () => {
  return (
    <div className="max-w-[1500px] mx-auto h-screen flex items-center justify-center">
      <div className="flex items-center flex-col justify-center mx-auto w-fit shadow px-10 py-5 rounded-lg gap-3">
        <img src={Logo} alt="Logo Merried" className="mb-5"/>
        <div>
          <label 
            htmlFor="email-input" 
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaUser className="w-5 h-5 text-gray-500 dark:text-gray-400"/>
            </div>
            <input 
              type="email" 
              id="email-input" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Email"
            />
          </div>
        </div>
        <div>
          <label 
            htmlFor="password-input" 
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Password <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaLock className="w-5 h-5 text-gray-500 dark:text-gray-400"/>
            </div>
            <input 
              type="password" 
              id="password-input" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Password"
            />
          </div>
        </div>
        <button type="submit" className="w-full text-white bg-yellow-900 hover:bg-amber-800 focus:ring-4 focus:ring-amber-600 font-medium rounded-lg text-sm px-7 py-2.5 mr-2 mb-2 dark:bg-amber-600 dark:hover:bg-amber-700 focus:outline-none dark:focus:ring-amber-800">
          Masuk
        </button>
        <span className="my-5">Atau masuk dengan Google</span>
        <button 
          type="button" 
          className="w-full flex items-center justify-center gap-2 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          <FaGoogle className="text-red-500"/>
          {" "}
          Google
        </button>
        <div>
          Belum memiliki akun?
          {" "}
          <Link 
            to="/register"
            className="font-medium"
          >
            Daftar
          </Link>
        </div>
      </div>
    </div>
  )
}